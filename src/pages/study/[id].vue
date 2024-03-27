<script setup lang="ts">
interface Params { id: string }
const params = useRouteParams<Params>()
</script>

<template>
  {{ params.id }}
</template>

<style lang="scss" scoped></style>
