export default function () {
  window.<%= globals.readyCallback %>(() => {
    <% if (typeof options.url === 'string') { %>
      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = '<%= options.url %>'
      document.head.appendChild(link)
    <% } %>

    <% if (options.url.local) { %>
      const localLink = document.createElement('link')
      localLink.rel = 'stylesheet'
      localLink.href = '<%= options.url.local %>'
      document.head.appendChild(localLink)
    <% } %>

    <% if (options.url.google) { %>
      const googleLink = document.createElement('link')
      googleLink.rel = 'stylesheet'
      googleLink.href = '<%= options.url.google %>'
      document.head.appendChild(googleLink)
    <% } %>

    <% if (options.url.custom) { %>
      const customLink = document.createElement('link')
      customLink.rel = 'stylesheet'
      customLink.href = '<%= options.url.custom %>'
      document.head.appendChild(customLink)
    <% } %>
  })
}
