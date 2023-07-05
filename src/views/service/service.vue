<script setup lang="ts">
const list = ref([
  { label: '火柴人隐私摄像头安装及维护', status: 1 },
  { label: '监控视频云存储', status: 0 },
  { label: '摔倒告警', status: 0 },
  { label: '配火柴人智慧摄像头', status: 0 },
  { label: '后台电话告警通知', status: 0 },
  { label: '质保两年', status: 1 },
  { label: '送终身设备维护', status: 0 },
])

const list1 = $ref([
  { label: '(个人)', value: 180 },
  { label: '(合作批发)', value: 126 },
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
            b="2 solid transparent" mr-5 mb-5 rounded px-3 py-1 relative
            style="background-color: #4b5563;"
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
          <div rounded-lg px-3 py-1 style="background-color: #6b7280;" mx-3>{{ count }}</div>
          <button mr-3 text-3xl @click="count++">+</button>
          <div>/ 年</div>
        </div>

        <div flex text-xl items-center mt-10>
          <div mr-10>服务费用</div>

          <button
            v-for="(i, index) in list1"
            :key="i.value" b="2 solid transparent"
            mr-5 rounded px-3 py-1 relative
            style="background-color: #4b5563;"
            :class="moneyIndex === index && 'b-blue-5 text-primary bg-auto'"
            @click="moneyIndex = index"
          >
            <i v-if="moneyIndex === index" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
            ¥ {{ i.value }} / 项 <span text-sm style="color: #d1d5db" ml-1>{{ i.label }}</span>
          </button>
        </div>

        <div b="0 b-1 solid" style="border-color: #e5e7eb;" mt-10 mb-3 />
        <div style="color: #d1d5db" text-sm>注：以上项目任加选两项续费可免首年坐席服务费；或20元/月</div>
        <div mt-5 flex items-center>
          <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
          <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
