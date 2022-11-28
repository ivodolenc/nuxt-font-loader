import { readFileSync } from 'fs'
import { execSync } from 'child_process'
import { inc } from 'semver'
import prompts from 'prompts'
import { log } from 'logzy'

const pkg = JSON.parse(readFileSync('./package.json').toString())
const onCancel = () => process.exit()

async function updatePackageVersion() {
  log(['cyan', 'bold'], `> Current package version: ${pkg.version}`)

  const patchVer = inc(pkg.version, 'patch')
  const minorVer = inc(pkg.version, 'minor')
  const majorVer = inc(pkg.version, 'major')

  const { version } = await prompts(
    {
      type: 'select',
      name: 'version',
      message: 'Select new package version:',
      choices: [
        { title: `Patch (${patchVer})`, value: 'patch' },
        { title: `Minor (${minorVer})`, value: 'minor' },
        { title: `Major (${majorVer})`, value: 'major' }
      ],
      hint: ' '
    },
    { onCancel }
  )
  const newVersion = inc(pkg.version, version)

  execSync(`npm version --no-git-tag-version ${version}`)

  return commitChanges(newVersion)
}

async function commitChanges(nv: string | null) {
  const files = `package.json package-lock.json`
  const command = `npm run build:module && git add ${files} && git commit --no-verify -m 'chore(release): ${nv}' && git push --no-verify && npm publish`

  const { answer } = await prompts(
    {
      type: 'select',
      name: 'answer',
      message: 'Do you want to commit changes to the GitHub repo?',
      choices: [
        { title: 'Yes', value: true },
        { title: 'No', value: false }
      ],
      hint: ' '
    },
    { onCancel }
  )

  if (answer) {
    execSync(command)

    log(
      ['cyan', 'bold'],
      '> Package version updated and pushed to the Github repository!'
    )
    log(['lime'], `✔ New package version: ${nv}`)
  }
}

updatePackageVersion()
