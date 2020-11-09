export default function () {
  window.onNuxtReady(() => {
    <% if (typeof options.url === 'string') { %>
      // Font Loader
      const fontsLink = document.createElement('link')
      fontsLink.rel = 'stylesheet'
      fontsLink.href = '<%= options.url %>'
      document.head.appendChild(fontsLink)
    <% } %>

    <% if (typeof options.url.local === 'string') { %>
      // Local Fonts
      const localFontsLink = document.createElement('link')
      localFontsLink.rel = 'stylesheet'
      localFontsLink.href = '<%= options.url.local %>'
      document.head.appendChild(localFontsLink)
    <% } %>

    <% if (typeof options.url.google === 'string') { %>
      // Google Fonts
      const googleFontsLink = document.createElement('link')
      googleFontsLink.rel = 'stylesheet'
      googleFontsLink.href = '<%= options.url.google %>'
      document.head.appendChild(googleFontsLink)
    <% } %>

    <% if (typeof options.url.custom === 'string') { %>
      // Custom Fonts
      const customFontsLink = document.createElement('link')
      customFontsLink.rel = 'stylesheet'
      customFontsLink.href = '<%= options.url.custom %>'
      document.head.appendChild(customFontsLink)
    <% } %>
  })
}
