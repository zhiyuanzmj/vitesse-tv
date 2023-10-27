import { useLocalStorage } from '@vueuse/core'

const token = useLocalStorage('token', '')

export const user = reactive({
  token,
})
