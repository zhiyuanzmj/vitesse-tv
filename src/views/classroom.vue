<script setup lang="ts">
let sidebarId = $(useRouteQuery('sidebarId'))
let sidebars = $ref([])
useApi({
  url: '/classroom/classification',
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
    url: '/classroom',
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
  <div flex="~ 1">
    <div justify-around rounded-lg style="background-color: #164e6380;" flex="~ col">
      <RouterLink
        v-for="(sidebar, index) in sidebars"
        :key="sidebar.id"
        flex="~" flex-wrap justify-center items-center
        px-5 py-3 rounded-lg
        :to="{ query: { sidebarId: sidebar.id } }"
        :class="($route.query.sidebarId) === `${sidebar.id}` ? 'bg-blue-500' : ''"
      >
        <i text-2xl :class="`i-custom:vector${index}`" mb-3 />
        <span text-lg mx-auto whitespace-nowrap>{{ sidebar.name }}</span>
      </RouterLink>
    </div>

    <div flex="~ 1 col">
      <div flex="~ 1">
        <button
          v-for="(i) in list" :key="i.name" h-70 w-50 ml-10 cursor-pointer flex="~ col" @click="() => {
            show = true
            row = i
            $nextTick(() => {
              videoRef.requestFullscreen()
              // videoRef.play()
            })
          }"
        >
          <img object-cover flex-1 rounded-lg overflow-hidden h-full w-full :src="`/api/file/${i.imagePath}`">
          <div mt-2 text-lg font-500>
            {{ i.name }}
          </div>
          <div op70 whitespace-nowrap>
            {{ i.description }}
          </div>
        </button>
      </div>
    </div>

    <video v-if="show" ref="videoRef" z--1 object-fill preload="none" w-full h-full rounded-lg object-cover autoplay controls poster="/images/inquiry.png">
      <source :src="`/api/file/${row.path}`" type="video/mp4">
    </video>
  </div>
</template>
