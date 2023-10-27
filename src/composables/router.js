import { ref, watch } from 'vue'
import { useRouter } from '@/router'

export function useRouteQuery(
  name,
  defaultValue,
  {
    router = useRouter(),
  } = {},
) {
  const result = ref(router.currentRoute.query[name] || defaultValue)
  watch(result, (value) => {
    if (value !== router.currentRoute.query[name]) {
      router.push({ query: {
        ...router.currentRoute.query,
        [name]: value,
      } })
    }
  })
  router.afterEach(() => {
    result.value = router.currentRoute.query[name]
  })
  return result
}
