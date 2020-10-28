export default function () {
  window.onNuxtReady(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '<%= options.url %>'
    document.head.appendChild(link)
  })
}
