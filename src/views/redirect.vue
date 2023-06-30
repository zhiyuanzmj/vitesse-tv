<script setup lang="ts">
import { onBeforeRouteLeave } from 'vue-router'

const router = useRouter()
const redirect = $(useRouteQuery<string>('redirect'))
if (redirect)
  router.push(redirect)
else
  router.back()

const { cachedViews } = useTagsViewStore()
onBeforeRouteLeave((to) => {
  cachedViews.delete(to.name)
})
</script>

<template>
  <div />
</template>

<route lang="yaml">
meta:
  hidden: true
</route>
