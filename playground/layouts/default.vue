<template>
  <div id="__default">
    <NavMain />
    <slot />
  </div>
</template>

<style>
body {
  font-family: 'AspektaPRO-VF', sans-serif;
  font-variation-settings: 'wght' 400;
  background: #111;
  color: #fff;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

h1 {
  font-variation-settings: 'wght' 600;
}

a,
a:hover,
a:visited {
  color: #fff;
  text-decoration: none;
}
</style>
