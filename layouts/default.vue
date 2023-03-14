<template>
  <div>
    <!-- header -->
    <header class="title">
      <NuxtLink class="logo" to="/">Nuxt Shopping</NuxtLink>
      <!-- <h1>{{ $route.name }}페이지</h1> -->
      <!-- <NuxtLink to="/">home</NuxtLink>
      <NuxtLink to="/product">product</NuxtLink> -->
      <!-- router-link === <NuxtLink/> -->
    </header>

    <!-- main -->
    <!-- router-view === <Nuxt/> -->
    <Nuxt />

    <!-- footer -->
  </div>
</template>

<style scoped>
header {
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}
.logo {
  font-weight: 900;
}
.logo:visited {
  color: inherit;
}
</style>
