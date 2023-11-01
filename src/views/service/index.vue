<script setup lang="ts">
import { RouterLink } from 'vue-router'

const listColors = [
  { label: '坐席服务', style: 'background: linear-gradient(180deg, #4AADF6 0%, #1971E1 100%);' },
  { label: '智能穿戴', style: 'background: linear-gradient(180deg, #9B65EF 0%, #5C25CB 100%);' },
  { label: '分钟诊断', style: 'background: linear-gradient(180deg, #EF7E3F 0%, #DC561B 100%);' },
  { label: '适老化改造', style: 'background: linear-gradient(180deg, #5DD7FB 0%, #1AC0F2 100%);' },
  { label: '安防服务', style: 'background: linear-gradient(180deg, #6A7BEE 0%, #3938E0 100%);margin-right:0' },
]
let list = $ref([])
async function getList() {
  const { data } = await useApi({
    url: '/elderly/services',
    params: {
      title: '',
    },
  })
  list = data.map((i, index) => ({
    ...i,
    style: listColors[index].style,
  }))
}
getList()

async function post(elderlyServicesId: string) {
  const result = confirm('确认下单?')
  if (!result)
    return
  const { data } = await useApi({
    url: '/order/elderly/services',
    method: 'post',
    params: {
      elderlyServicesId,
    },
  })
}
</script>

<template>
  <div flex="~ 1 col">
    <div flex="~ 1" grow-3 mb-5>
      <RouterLink :to="{ path: `/service/service` }" mr-5 flex="~ col" style="background: rgb(194 233 233);" grow-0 rounded items-center justify-center overflow-hidden relative>
        <img src="/images/service-header-0.png" h-full overflow-hidden rounded-lg w-full>
        <span text-5xl font-600 text="#FD7855" absolute bottom-3 top-10 left-10>商城</span>
      </RouterLink>

      <RouterLink :to="{ path: `/service/service` }" mx-auto flex="~ col" grow-0 rounded items-center justify-center overflow-hidden relative>
        <img src="/images/service-header-1.png" h-full overflow-hidden rounded-lg w-full>
        <span text-lg ml-auto absolute bottom-3 right-3>居家服务</span>
      </RouterLink>

      <div relative ml-5>
        <img src="/images/service-header-2.png" h-full overflow-hidden rounded-lg w-full>
        <img src="/images/service-header-2-1.png" rounded-lg absolute top="40%" right-10>
        <span text-lg text="#FD7855" font-600 ml-auto absolute bottom-3 right-3>养老地图</span>
      </div>
    </div>

    <div flex="~ 1" mr--5>
      <button v-for="(i) in list" :key="i.label" mr-5 :style="i.style" rounded-lg flex="~ col 1" items-center justify-center @click="post(i.id)">
        <img :src="`/api/file/${i.icon}`" mt-auto mb-3>
        <span text-lg mb-auto>{{ i.title }}</span>
      </button>
    </div>
  </div>
</template>
