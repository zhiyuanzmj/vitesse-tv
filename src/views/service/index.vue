<script setup lang="ts">
import { RouterLink } from 'vue-router'

const list = [
  { label: '坐席服务', style: 'background: linear-gradient(180deg, #4AADF6 0%, #1971E1 100%);' },
  { label: '智能穿戴', style: 'background: linear-gradient(180deg, #9B65EF 0%, #5C25CB 100%);' },
  { label: '分钟诊断', style: 'background: linear-gradient(180deg, #EF7E3F 0%, #DC561B 100%);' },
  { label: '适老化改造', style: 'background: linear-gradient(180deg, #5DD7FB 0%, #1AC0F2 100%);' },
  { label: '安防服务', style: 'background: linear-gradient(180deg, #6A7BEE 0%, #3938E0 100%);margin-right:0' },
]
</script>

<template>
  <div flex="~ 1 col">
    <div flex="~ 1" grow-3 mb-5>
      <!-- <button mr-5 rounded-lg style="background-image: url('/images/service.png')" bg-cover bg-no-repeat /> -->
      <!-- <button mr-5 relative rounded-lg grow="1.5" style="background-image: url('/images/service-1.png')" bg-cover bg-no-repeat>
      </button> -->
      <!-- style="background-color: #9ca3af;" -->
      <RouterLink
        :to="{ path: `/service/service` }" flex="~ col" grow-1 rounded-lg style="background-color: #EF7D3E;"
        items-center justify-center
      >
        <img src="/images/service.svg" mt-auto mb-3>
        <span text-lg mb-auto z-1>居家守护</span>
      </RouterLink>

      <div grow-2 flex-1 grow-1 mx-5 relative>
        <video
          preload="none" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service-1.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <div grow-2 flex-1 grow-3 relative>
        <video
          preload="none" webkit-playsinline="true" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <div flex="~ 1">
      <div flex-1 grow-1 mr-5 relative>
        <video
          preload="none" webkit-playsinline="true" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service1.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <div flex-1 grow-1 mr-5 relative>
        <video
          preload="none" webkit-playsinline="true" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service2.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <div flex-1 grow-1 mr-5 relative>
        <video
          preload="none" webkit-playsinline="true" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service3.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <div flex-1 grow-1 relative>
        <video
          preload="none" webkit-playsinline="true" w-full h-full absolute rounded-lg bg-cover controls object-cover
          poster="/images/service4.png" @click="$event.target.webkitRequestFullscreen()"
        >
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <!-- <RouterLink v-for="(i, index) in list" :key="i.label" :to="{ path: `/service/service${index}` }" mr-5
        :style="i.style" rounded-lg flex="~ col 1" items-center justify-center>
        <img :src="`images/service${index}.svg`" mt-auto mb-3>
        <span text-lg mb-auto>{{ i.label }}</span>
      </RouterLink> -->
    </div>
  </div>
</template>
