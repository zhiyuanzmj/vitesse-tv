<script setup lang="ts">
const list = [
  '做好政府养老服务宣讲',
  '养老产业发展行动计划 ',
  '推进健康与养老服务 ',
  '推进健康与养老服务 ',
  '推进健康与养老服务 ',
  '推进健康与养老服务  ',
]
</script>

<template>
  <div flex="~ 1" overflow-hidden>
    <div flex="~ col" mr-5 justify-around rounded-lg bg-black bg-op40>
      <RouterLink
        v-for="(i, index) in list" :key="i"
        flex p5 rounded
        :to="{ query: { sidebar: index || undefined } }"
        :style="($route.query.sidebar || '0') === `${index}` && 'background: linear-gradient(90deg, #1A95FF 0%, rgba(26, 149, 255, 0.00) 100%);'"
      >
        <span mr-3>0{{ index + 1 }}</span>
        <span>{{ i }}</span>
      </RouterLink>
    </div>

    <div flex="~ col 1" h="[calc(100vh-200px)]">
      <div flex-1 overflow-hidden>
        <video w-full h-full rounded-lg bg-cover controls poster="/images/policy.png">
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>
      <div text-lg mt-3 mb-1>
        相关宣讲视频
      </div>
      <div flex>
        <div
          v-for="(i, index) in 4"
          :key="i"
          :style="index===3?'margin-right:0;':''"
          relative flex="~ 1" mr-5
        >
          <img bg-cover w-full :src="`/images/policy${index}.png`">
          <button flex items-center justify-center h-10 w-10 p-1 bg-black bg-op50 rounded-full absolute left="45%" top="45%" z-1>
            <i i-custom:play text-2xl />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
