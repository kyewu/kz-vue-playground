import type { RouteParams } from 'vue-router'

export function useRouteParams<P extends RouteParams>() {
  const route = useRoute()
  return computed(() => route.params as P)
}
