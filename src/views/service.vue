<script setup lang="ts">
const list = [
  { label: '上门服务', style: 'background: linear-gradient(180deg, #4AADF6 0%, #1971E1 100%);' },
  { label: '点餐服务', style: 'background: linear-gradient(180deg, #9B65EF 0%, #5C25CB 100%);' },
  { label: '病人陪同', style: 'background: linear-gradient(180deg, #EF7E3F 0%, #DC561B 100%);' },
  { label: '配送服务', style: 'background: linear-gradient(180deg, #5DD7FB 0%, #1AC0F2 100%);' },
  { label: '服务记录', style: 'background: linear-gradient(180deg, #6A7BEE 0%, #3938E0 100%);' },
]
</script>

<template>
  <div flex-1 gap-5 grid grid-rows="[2fr_1fr]">
    <div grid grid-cols="[2.2fr_1fr_1fr]" flex-1 gap-5>
      <button rounded-lg style="background-image: url('/images/service.png')" bg-cover bg-no-repeat />
      <button relative rounded-lg style="background-image: url('/images/service1.png')" bg-cover bg-no-repeat>
        <span absolute right-5 bottom-5>居家养老操作指南</span>
      </button>
      <button flex="~ col" bg="white op50" rounded-lg items-center justify-center gap-3>
        <i class="i-custom:service" text-5xl />
        <span text-lg>视频关爱</span>
      </button>
    </div>

    <div grid="~ cols-5" gap-5 flex-1>
      <button v-for="(i, index) in list" :key="i.label" :style="i.style" rounded-lg flex="~ col" items-center justify-center gap-3>
        <i :class="`i-custom:service${index}`" text-5xl />
        <span text-lg>{{ i.label }}</span>
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 居家服务
  order: 4
</route>
