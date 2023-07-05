<script setup lang="ts">
const list = ref([
  { label: '送安防传感器安装及一年维保', status: 1 },
  { label: '门禁告警', status: 0 },
  { label: '漏水告警', status: 0 },
  { label: '漏气告警', status: 0 },
  { label: '烟雾告警', status: 0 },
  { label: '紧急呼救告警', status: 1 },
  { label: '红外布控告警', status: 0 },
  { label: '物联网中枢控制', status: 0 },
  { label: '坐席后台告警监控', status: 0 },
])

const list1 = $ref([
  { label: '(个人)', value: 2500 },
  { label: '(合作批发)', value: 2500 },
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
            b="2 solid transparent" mr-5 mb-5 rounded px-3 py-1 relative
            style="background-color: #4b5563;"
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
            mr-5 rounded px-3 py-1 relative
            style="background-color: #4b5563;"
            :class="moneyIndex === index && 'b-blue-5 text-primary bg-transparent!'"
            @click="moneyIndex = index"
          >
            <i v-if="moneyIndex === index" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
            ¥ {{ i.value }} / 项 <span text-sm style="color: #d1d5db" ml-1>{{ i.label }}</span>
          </button>
        </div>

        <div b="0 b-1 solid" style="border-color: #e5e7eb;" mt-10 mb-3 />
        <div style="color: #d1d5db" text-sm>注：配门磁报警,烟雾报警，燃气报警，溢水报警，便携紧急报警按钮，固定紧急报警按钮，中枢网关，红外报警器</div>
        <div mt-5 flex items-center>
          <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
          <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
