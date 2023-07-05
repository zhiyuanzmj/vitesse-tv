<script setup lang="ts">
const list = ref([
  { label: '一键告警', status: 1 },
  { label: '定位+足迹回放', status: 0 },
  { label: '语音信息', status: 0 },
  { label: '一键电话拨号', status: 0 },
  { label: '语音报时', status: 0 },
  { label: '健康数据监测', status: 1 },
  { label: '白名单接听保护', status: 0 },
  { label: '定时健康检测', status: 0 },
  { label: '电子围栏预警', status: 0 },
])

const list1 = $ref([
  { label: '(个人)', value: 600 },
  { label: '(合作批发)', value: 300 },
])
const moneyIndex = $ref(0)

const money = computed(() => list1[moneyIndex]?.value || 0)
</script>

<template>
  <div>
    <div text-3xl>
      {{ $route.meta.title }}
    </div>
    <div flex mt-10>
      <div h="60" px-20 whitespace-nowrap mr-10 rounded-lg text-2xl bg-blue4 flex justify-center items-center>
        {{ $route.meta.title }}
      </div>

      <div>
        <div mb-5 text-xl>
          服务项目
        </div>
        <div flex="~ wrap">
          <button
            v-for="(i) in list" :key="i.label"
            b="2 solid transparent" bg-gray-6 mr-5 mb-5 rounded px-3 py-1 relative
            :class="i.status && 'b-blue-5! text-primary bg-transparent'"
            @click="i.status = !i.status"
          >
            <i v-if="i.status" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
            {{ i.label }}
          </button>
        </div>

        <div flex text-xl items-center mt-10>
          <div mr-10>服务费用</div>

          <button
            v-for="(i, index) in list1"
            :key="i.value" b="2 solid transparent"
            bg-gray-6 mr-5 rounded px-3 py-1 relative
            :class="moneyIndex === index && 'b-blue-5! text-primary bg-transparent'"
            @click="moneyIndex = index"
          >
            <i v-if="moneyIndex === index" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
            ¥ {{ i.value }} / 项 <span text-sm text-gray-3 ml-1>{{ i.label }}</span>
          </button>
        </div>

        <div b="0 b-1 solid gray2" mt-10 mb-3 />
        <!-- <div text-gray-3 text-sm>注：以上项目任加选两项续费可免首年坐席服务费；或20元/月</div> -->
        <div mt-5 flex items-center>
          <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
          <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
