<template>
  <div flex>
    <router-link to="/">
      产品
    </router-link>
    <router-link to="/community">
      社区
    </router-link>
    <router-link to="/study">
      学习
    </router-link>
    <router-link to="/about">
      关于
    </router-link>
  </div>
  <main px-4 py-10 flex-1>
    Main
    <RouterView />
  </main>
  <footer>Footer</footer>
</template>
