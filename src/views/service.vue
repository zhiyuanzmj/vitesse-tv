<script setup lang="ts">
const list = [
  { label: '上门服务', style: 'background: linear-gradient(180deg, #4AADF6 0%, #1971E1 100%);'},
  { label: '点餐服务', style: 'background: linear-gradient(180deg, #9B65EF 0%, #5C25CB 100%);' },
  { label: '病人陪同', style: 'background: linear-gradient(180deg, #EF7E3F 0%, #DC561B 100%);' },
  { label: '配送服务', style: 'background: linear-gradient(180deg, #5DD7FB 0%, #1AC0F2 100%);' },
  { label: '服务记录', style: 'background: linear-gradient(180deg, #6A7BEE 0%, #3938E0 100%);margin-right:0'},
]
</script>

<template>
  <div flex="~ 1 col">
    <div flex grow-3 mb-5>
      <button mr-5 rounded-lg grow="2.2" style="background-image: url('/images/service.png')" bg-cover bg-no-repeat />
      <button mr-5 relative rounded-lg grow-1 style="background-image: url('/images/service-1.png')" bg-cover bg-no-repeat>
        <span absolute right-5 bottom-5>居家养老操作指南</span>
      </button>
      <button flex="~ col" grow-1 style="background-color: #9ca3af;" rounded-lg items-center justify-center>
        <img :src="`images/service5.png`" mt-auto mb-3>
        <span text-lg mb-auto>视频关爱</span>
      </button>
    </div>

    <div flex grow-1>
      <button v-for="(i, index) in list" :key="i.label" mr-5 :style="i.style" rounded-lg flex="~ col 1" items-center justify-center>
        <img :src="`images/service${index}.png`" mt-auto mb-3>
        <span text-lg mb-auto>{{ i.label }}</span>
      </button>
    </div>
  </div>
</template>