<script setup lang="ts">
const sidebars = [
  '全部',
  '糖尿病专栏',
  '玉玄宫治疗',
  '生活饮食',
  '运动康复',
  '其他课程',
  '观看记录',
]

const list = [
  { label: '测糖能降糖吗', description: '定期监测血糖的作用' },
  { label: '打胰岛素测血糖', description: '打胰岛素后如何测血糖' },
  { label: '让测血糖更有意义', description: '如何更好地做好血糖监测' },
  { label: '糖尿病者血糖监测', description: '糖友如何做好血糖监测' },
  { label: '糖尿病者如何饮食', description: '糖友要如何搭配才健康' },
  { label: '夏日炎炎，我爱水果', description: '如何根据血糖食用水果' },
  { label: '如何发现血糖问题', description: '根据血糖指数发现问题' },
  { label: '宅在家里莫名变胖', description: '宅在家里莫名变胖怎么办' },
  { label: '如何降糖饮食', description: '糖尿病患者如何做好饮食' },
  { label: '定期血糖检查的意义', description: '为什么要定期检查血糖' },
]
</script>

<template>
  <div flex="~ 1">
    <div justify-around rounded-lg style="background-color: #164e6380;" flex="~ col">
      <RouterLink
        v-for="(sidebar, index) in sidebars"
        :key="sidebar"
        flex="~" flex-wrap justify-center items-center
        px-5 py-3 rounded-lg
        :to="{ query: { sidebar: index || undefined } }"
        :class="($route.query.sidebar || '0') === `${index}` ? 'bg-blue-500' : ''"
      >
        <i text-2xl :class="`i-custom:vector${index}`" mb-3 />
        <span text-lg mx-auto whitespace-nowrap>{{ sidebar }}</span>
      </RouterLink>
    </div>

    <div flex="~ 1 col">
      <div flex="~ 1">
        <button v-for="(i, index) in list.slice(0, 5)" :key="i.label" ml-5 cursor-pointer flex="~ col 1">
          <img object-cover flex-1 rounded-lg :src="`/images/classroom${index}.png`">
          <div mt-2 text-lg font-500>
            {{ i.label }}
          </div>
          <div op70 whitespace-nowrap>
            {{ i.description }}
          </div>
        </button>
      </div>
      <div flex="~ 1" mt-5>
        <button v-for="(i, index) in list.slice(5, 10)" :key="i.label" cursor-pointer ml-5 flex="~ col 1">
          <img object-cover flex-1 rounded-lg :src="`/images/classroom${5 + index}.png`">
          <div mt-2 text-lg font-500>
            {{ i.label }}
          </div>
          <div op70 whitespace-nowrap>
            {{ i.description }}
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
