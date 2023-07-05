<script setup lang="ts">
const list = ref([
  { label: '室内改造评估', status: 1 },
  { label: '室内改造设计', status: 0 },
  { label: '室内改造安装', status: 0 },
  { label: '配:挂墙式沐浴椅', status: 0 },
  { label: '一字扶手', status: 0 },
  { label: '上翻扶手', status: 1 },
  { label: '圆弧沐浴花洒扶手', status: 0 },
  { label: '扶手式洗脸盆', status: 0 },
  { label: '扶手式毛巾架', status: 0 },
])

const list1 = $ref([
  { label: '(个人)', value: 2600 },
  { label: '(合作批发)', value: 1800 },
])
const moneyIndex = $ref(0)

const count = $ref(1)

const money = computed(() => count * list1[moneyIndex]?.value || 0)
</script>

<template>
  <div flex="~ col">
    <div text-3xl mb-5>
      {{ $route.meta.title }}
    </div>

    <div flex="~ 1" overflow-hidden>
      <div flex-1 px-20 whitespace-nowrap rounded-lg text-2xl bg-blue-4 flex justify-center items-center>
        {{ $route.meta.title }}
      </div>

      <div grow-2 flex-1 mx-10 relative>
        <video preload="none" h-full w-full absolute rounded-lg bg-cover controls poster="/images/service3-0.png">
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>

      <div grow-2 flex-1 relative>
        <video preload="none" absolute h-full w-full rounded-lg bg-cover controls poster="/images/service3-1.png">
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <div mb-5 text-xl mt-5>
      服务项目
    </div>
    <div flex="~ wrap">
      <button
        v-for="(i) in list" :key="i.label"
        style="background-color: #4b5563;"
        b="2 solid transparent" mr-5 mb-5 rounded px-3 py-1 relative
        :class="i.status && 'b-blue-5 text-primary bg-transparent!'"
        @click="i.status = !i.status"
      >
        <i v-if="i.status" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
        {{ i.label }}
      </button>
    </div>

    <div flex text-xl items-center mt-3>
      <div mr-10>服务费用</div>

      <button
        v-for="(i, index) in list1"
        :key="i.value" b="2 solid transparent"
        mr-5 rounded px-3 py-1 relative
        style="background: #4b5563"
        :class="moneyIndex === index && 'b-blue-5 text-primary bg-transparent'"
        @click="moneyIndex = index"
      >
        <i v-if="moneyIndex === index" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
        ¥ {{ i.value }} / 项 <span text-sm style="color:#d1d5db" ml-1>{{ i.label }}</span>
      </button>
    </div>

    <div b="0 b-1 solid" style="border-color: #e5e7eb;" mt-5 mb-3 />
    <div style="color: #d1d5db" text-sm>注：送一年维保</div>
    <div mt-5 flex items-center>
      <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
      <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
    </div>
  </div>
</template>
