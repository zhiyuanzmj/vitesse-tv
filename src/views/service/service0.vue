<script setup lang="ts">
const list = ref([
  { label: '老人健康档案管理', status: 1 },
  { label: '数据库云存储', status: 0 },
  { label: '坐席呼援告警服务', status: 0 },
  { label: '保健咨询服务', status: 0 },
  { label: '电话求助咨询', status: 1 },
  { label: '营养饮食咨询', status: 0 },
  { label: '常用家庭用药咨询', status: 0 },
  { label: '坐席关怀语音服务', status: 0 },
  { label: '上门配送服务', status: 1 },
])

const list1 = $ref([
  { label: '(个人)', value: 2500 },
  { label: '(合作批发)', value: 1750 },
])
const moneyIndex = $ref(0)

const count = $ref(1)

const money = computed(() => count * list1[moneyIndex]?.value || 0)
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

        <div flex text-xl items-center mt-7>
          <div mr-10>服务期限:</div>
          <button text-2xl @click="count--">—</button>
          <div rounded-lg px-3 py-1 bg-gray-5 mx-3>{{ count }}</div>
          <button mr-3 text-3xl @click="count++">+</button>
          <div>/ 年</div>
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
        <div text-gray-3 text-sm>注：本服务需使用家庭wifi,请确保安装环境具备WIFI</div>
        <div mt-5 flex items-center>
          <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
          <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
