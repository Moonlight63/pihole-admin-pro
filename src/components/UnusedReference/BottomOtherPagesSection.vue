<script setup>
const router = useRouter()

const routes = router.getRoutes()

const screens = []

for (const routeIndex in routes) {
  const path = routes[routeIndex].path
  const title =
    routes[routeIndex].meta && routes[routeIndex].meta.title
      ? routes[routeIndex].meta.title
      : null

  if (title) {
    screens.push({
      path,
      title
    })
  }
}
</script>

<template>
  <TitledSection last>
    <h1
      class="flex flex-col items-center justify-center mb-12 text-2xl md:flex-row text-on-main-muted"
    >
      <span class="md:mr-3">Please star this project on</span>
      <a
        href="https://github.com/justboil/admin-one-vue-tailwind"
        class="inline-flex items-center justify-center text-primary"
        target="_blank"
      >
        <UiIconify icon="mdi:github" class="mr-1 text-4xl" />
        <span>GitHub</span>
      </a>
    </h1>
    <h1 class="mb-12 text-2xl text-on-main-muted">
      Check out other components and layouts at<br />
      <template v-for="(screen, index) in screens" :key="screen.path">
        <RouterLink :to="screen.path" class="text-primary">
          {{ screen.title }}
        </RouterLink>
        <template v-if="index + 1 < screens.length"> , </template>
      </template>
      <br />
      screen samples
    </h1>
    <h1 class="text-2xl text-on-main-muted">
      Get more with
      <a
        href="https://justboil.me/tailwind-admin-templates/vue-dashboard/"
        target="_blank"
        class="text-primary"
        >Premium version</a
      >
    </h1>
  </TitledSection>
</template>
