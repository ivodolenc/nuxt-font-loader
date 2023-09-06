import { jsConfig, tsConfig, ignores } from 'configshare/eslint'

export default [
  jsConfig,
  tsConfig,
  {
    files: tsConfig.files,
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { ignoreRestSiblings: true },
      ],
    },
  },
  {
    ignores: [...ignores, '**/.nuxt/**/*'],
  },
]
