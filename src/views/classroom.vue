<script setup lang="ts">
const sidebars = [
  '全部',
  '艺术类',
  '健康类',
  '生活类',
  '体育类',
  '应用类',
  '观看记录',
]

const list = [
  { label: '老年饮食健康', description: '专注老人饮食方面课程' },
  { label: '老年康复指导', description: '专注老人手术后康复指导' },
  { label: '老年健康知识', description: '老年健康基本知识讲解' },
  { label: '老年人心里健康', description: '学习与老人有效沟通' },
  { label: '老年人常见病及预防', description: '老年常见疾病及预防措施' },
  { label: '老年健康指导', description: '老年人健康方面指导意见' },
  { label: '老年膳食健康', description: '老年人日常膳食健康长寿' },
  { label: '老年人健康护理', description: '健康护理小知识' },
  { label: '促进老年健康常识', description: '老年人生活中健康小常识' },
  { label: '老年健康保健', description: '老年养生保健、健康保健' },
]
</script>

<template>
  <div flex-1 grid grid-cols="[auto_1fr]" gap-5>
    <div justify-around rounded-lg style="background-color: rgba(0, 0, 0, 30%);" flex="~ col gap-3">
      <RouterLink
        v-for="(sidebar, index) in sidebars" :key="sidebar"
        gap-3 flex="~" flex-wrap justify-center items-center px-5 py-3 rounded-lg
        :to="{ query: { sidebar: index || undefined } }"
        :class="($route.query.sidebar || '0') === `${index}` ? 'bg-blue-500' : ''"
      >
        <i text-2xl :class="`i-custom:vector${index}`" />
        <span text-lg mx-auto whitespace-nowrap>{{ sidebar }}</span>
      </RouterLink>
    </div>

    <div grid grid-cols="[repeat(5,1fr)]" gap-5>
      <button v-for="(i, index) in list" :key="i.label" cursor-pointer flex="~ col">
        <img object-cover flex-1 rounded-lg :src="`/images/classroom${index}.png`">
        <div mt-2 text-lg font-500>{{ i.label }}</div>
        <div op70 whitespace-nowrap>{{ i.description }}</div>
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 老年课堂
  order: 2
</route>
