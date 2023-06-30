<script setup lang="ts">
const headers = $ref(['老年养生妙招', '生活中如何养生', '养生之道'])
const activeHeader = $ref('生活中如何养生')

const list = [
  { label: '老年养生妙招', description: '健康养生指导' },
  { label: '中医体质养生', description: '教你如何调理好身体' },
  { label: '二十四节气养生', description: '老祖宗不生病的大智慧' },
  { label: '全方位养生科普', description: '老年人生活中健康科普' },
  { label: '养生膳食谱', description: '多种促进养生的膳食及做法' },
]
</script>

<template>
  <div flex="~ col">
    <div flex mt-3 flex-1>
      <button
        v-for="(i, index) in headers"
        :key="i"
        :style="`background-image: url('/images/health${index}.png');margin-right:${index===headers.length-1?'0':'2.5rem'}`"
        relative cursor-pointer transition-all rounded-lg bg-no-repeat bg-cover flex-1
        :class="activeHeader === i && 'scale-108 shadow-all-side'"
        @focus="activeHeader = i"
        @mouseover="activeHeader = i"
      >
        <span font-500 absolute right-5 bottom-5>{{ i }}</span>
      </button>
    </div>

    <div mt-5 mb-1 text-lg>
      养生推荐
    </div>

    <div flex="~ 1">
      <div
        v-for="(i, index) in list" :key="i.label" 
        :style="index===list.length-1?`margin-right:0`:''"
        flex-1 mr-8 cursor-pointer overflow-hidden flex="~ col"
      >
        <button flex-1 bg-no-repeat bg-cover rounded-lg :style="`background-image: url('/images/health-${index}.png');`" />
        <div mt-2 text-lg font-500>
          {{ i.label }}
        </div>
        <div op70 whitespace-nowrap>
          {{ i.description }}
        </div>
      </div>
    </div>
  </div>
</template>
