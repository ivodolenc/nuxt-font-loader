export default function () {
  window.onNuxtReady(() => {
    <% if (typeof options.url === 'string') { %>
      // Font Loader
      const fontsLink = document.createElement('link')
      fontsLink.rel = 'stylesheet'
      fontsLink.href = '<%= options.url %>'
      document.head.appendChild(fontsLink)
    <% } %>

    <% if (options.url.local) { %>
      // Local Fonts
      const localFontsLink = document.createElement('link')
      localFontsLink.rel = 'stylesheet'
      localFontsLink.href = '<%= options.url.local %>'
      document.head.appendChild(localFontsLink)
    <% } %>

    <% if (options.url.google) { %>
      // Google Fonts
      const googleFontsLink = document.createElement('link')
      googleFontsLink.rel = 'stylesheet'
      googleFontsLink.href = '<%= options.url.google %>'
      document.head.appendChild(googleFontsLink)
    <% } %>

    <% if (options.url.custom) { %>
      // Custom Fonts
      const customFontsLink = document.createElement('link')
      customFontsLink.rel = 'stylesheet'
      customFontsLink.href = '<%= options.url.custom %>'
      document.head.appendChild(customFontsLink)
    <% } %>
  })
}
