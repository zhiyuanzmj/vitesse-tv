<script setup lang="ts">
let classificationId = $(useRouteQuery('classificationId'))
let sidebars = $ref([])
useApi({
  url: '/specialist/classification',
}).then(({ data }) => {
  sidebars = data
  classificationId = classificationId || data[0].id
})

watch(() => classificationId, () => {
  fetchList()
}, { immediate: true })

let list = $ref([])
async function fetchList() {
  if (!classificationId)
    return
  const { data } = await useApi({
    url: '/specialist',
    params: {
      classificationId,
    },
  })
  list = data
}
</script>

<template>
  <div flex="~ col">
    <div text-3xl mb-3>
      专家问诊
    </div>
    <!-- <div flex mt-3 flex-1>
      <button mr-10 grow-1 flex="~ col" justify-center items-center rounded-lg style="background: linear-gradient(180deg, #62D5AA 0%, #3FD481 100%);">
        <i text-5xl i-custom:inquiry mb-3 mx-auto mt-auto />
        <span text-xl mb-auto>预约挂号</span>
      </button>
      <div mr-10 grow-1 flex="~ col">
        <button col-span-2 mb-5 grow-2 flex="~ col" justify-center items-center rounded-lg style="background: linear-gradient(180deg, #3FCFE5 0%, #2D7FD8 100%);">
          <i text-5xl i-custom:inquiry1 mb-3 mt-auto />
          <span text-xl mb-auto>看病</span>
        </button>
        <div grow-1 flex>
          <button mr-5 flex="~ col 1" justify-center items-center rounded-lg style="background: linear-gradient(180deg, #FCA69F 0%, #F77F7B 100%);">
            <svg h-15 w-15 mt-auto mb-1 xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path d="M5.223 2.25c-.497 0-.974.198-1.325.55l-1.3 1.298A3.75 3.75 0 0 0 7.5 9.75a3.74 3.74 0 0 0 2.25.75c.844 0 1.624-.28 2.25-.75c.626.47 1.406.75 2.25.75a3.74 3.74 0 0 0 2.25-.75a3.75 3.75 0 0 0 4.902-5.652l-1.3-1.299a1.875 1.875 0 0 0-1.325-.549H5.223Z" /><path fill-rule="evenodd" d="M3 20.25v-8.755c1.42.674 3.08.673 4.5 0A5.234 5.234 0 0 0 9.75 12c.804 0 1.568-.182 2.25-.506a5.234 5.234 0 0 0 2.25.506c.804 0 1.567-.182 2.25-.506a5.26 5.26 0 0 0 4.5.001v8.755h.75a.75.75 0 0 1 0 1.5H2.25a.75.75 0 0 1 0-1.5H3Zm3-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75v-3Zm8.25-.75a.75.75 0 0 0-.75.75v5.25c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-5.25a.75.75 0 0 0-.75-.75h-3Z" clip-rule="evenodd" /></g></svg>
            <span text-xl mb-auto>买药</span>
          </button>
          <button flex="~ col 1" justify-center items-center rounded-lg style="background: #F7BE29;">
            <i text-5xl i-custom:inquiry3 mb-1 mt-auto />
            <span text-xl mb-auto>送药</span>
          </button>
        </div>
      </div>

      <div grow-2 flex-1 overflow-hidden>
        <video preload="none" w-full h-full rounded-lg object-cover controls poster="/images/inquiry.png">
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>
    </div> -->
    <div flex="~ 1">
      <div flex="~ col justify-start" mr-5 rounded-lg text-nowrap>
        <RouterLink
          v-for="(sidebar) in sidebars" :key="sidebar.id"
          flex p5 rounded
          :to="{ query: { classificationId: sidebar.id } }"
          :style="($route.query.classificationId || '0') === `${sidebar.id}` && 'background: linear-gradient(90deg, #1A95FF 0%, rgba(26, 149, 255, 0.00) 100%);'"
        >
          <span>{{ sidebar.name }}</span>
        </RouterLink>
      </div>
      <div flex="~ 1 items-start" ml-5>
        <div
          v-for="(i, index) in list" :key="i.label"
          w="1/3" mr-8 cursor-pointer overflow-hidden flex="~ col" rounded p-5 style="border: 1px solid #5187ED;background-color: #04094B;"
          :style="index === list.length - 1 ? 'margin-right:0' : ''"
        >
          <div flex="~ items-center">
            <div mr-5 bg-no-repeat w-15 h-15 bg-cover rounded-full :style="`background-image: url('/api/file/${i.photo}');`" />
            <div text-xl font-500 text="#83E0FD">
              {{ i.name }}
            </div>
          </div>

          <div mt-5>
            {{ i.description }}
          </div>
          <!-- <div flex mt-auto>
            <button flex-1 mr-3 px-5 py-3 rounded style="background-color: #2563eb;">
              预约挂号
            </button>
            <button flex-1 px-5 py-3 border="1 solid blue-5" rounded>
              在线咨询
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
