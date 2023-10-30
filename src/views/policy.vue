<script setup lang="ts">
let sidebarId = $(useRouteQuery('sidebarId'))
let sidebars = $ref([])
useApi({
  url: '/policy/classification',
}).then(({ data }) => {
  sidebars = data
  sidebarId = sidebarId || data[0].id
})

watch(() => sidebarId, () => {
  fetchList()
}, { immediate: true })

let list = $ref([])
async function fetchList() {
  if (!sidebarId)
    return
  const { data } = await useApi({
    url: '/policy',
    params: {
      classificationId: sidebarId,
    },
  })
  list = data
}

const row = $ref({})
const show = $ref(false)
const videoRef = $ref()
</script>

<template>
  <div flex="~ 1" overflow-hidden>
    <div flex="~ col" mr-5 justify-around rounded-lg bg-black bg-op40>
      <RouterLink
        v-for="(sidebar, index) in sidebars" :key="sidebar.id"
        flex p5 rounded
        :to="{ query: { sidebarId: sidebar.id } }"
        :style="($route.query.sidebarId || '0') === `${sidebar.id}` && 'background: linear-gradient(90deg, #1A95FF 0%, rgba(26, 149, 255, 0.00) 100%);'"
      >
        <span mr-3>0{{ index + 1 }}</span>
        <span>{{ sidebar.name }}</span>
      </RouterLink>
    </div>

    <div v-if="list?.length" flex="~ col 1">
      <div flex-1 overflow-hidden>
        <div
          preload="none" relative w-full h-full rounded-lg object-cover :poster="`/api/file/${list[0].imagePath}`"
          @click="() => {
            show = true
            row = list[0]
            $nextTick(() => {
              videoRef.requestFullscreen()
            })
          }"
        >
          <img w-full :src="`/api/file/${list[0].imagePath}`">
          <button flex items-center justify-center h-10 w-10 p-1 bg-black bg-op50 rounded-full absolute left="45%" top="45%" z-1>
            <i i-custom:play text-2xl />
          </button>
        </div>
      </div>
      <div text-lg mt-3 mb-1>
        相关宣讲视频
      </div>
      <div flex>
        <div
          v-for="(i, index) in list.slice(1, 5)"
          :key="i.name"
          w="1/4" h-30
          :style="index === 3 ? 'margin-right:0;' : ''"
          relative
          flex="~" mr-5
          @click="() => {
            show = true
            row = i
            $nextTick(() => {
              videoRef.requestFullscreen()
            })
          }"
        >
          <img bg-cover w-full :src="`/api/file/${i.imagePath}`">
          <button flex items-center justify-center h-10 w-10 p-1 bg-black bg-op50 rounded-full absolute left="45%" top="45%" z-1>
            <i i-custom:play text-2xl />
          </button>
        </div>
        <video v-if="show" ref="videoRef" absolute z--1 object-fill preload="none" w-full h-full rounded-lg object-cover autoplay controls poster="/images/inquiry.png">
          <source :src="`/api/file/${row.path}`" type="video/mp4">
        </video>
      </div>
    </div>
  </div>
</template>
