<script setup lang="ts">
let list = $ref([
  { label: '坐席服务', money: 180, unit: '/年', status: 1 },
  { label: '智慧穿戴', money: 600, unit: '/项', status: 0 },
  { label: '分钟诊所(12次)', money: 888, unit: '/年', status: 0 },
  { label: '家居守护', money: 2500, unit: '/项', status: 0 },
  { label: '适老化改造', money: 2600, unit: '/项', status: 0 },
  { label: '安防服务', money: 2500, unit: '/项', status: 0 },
])

async function getList() {
  const { data } = await useApi('/home/service', { params: { status: true } })
  list = data.map(i => ({ ...i, status: i.name === '坐席服务' ? 1 : 0 }))
}
getList()

async function submit() {
  await useApi('/order/home/services', {
    method: 'post',
    params: {
      homeServicesIds: list.filter(i => i.status).map(i => i.id).join(','),
    },
  })
}

const list1 = $ref([
  { label: '(个人)', value: 180 },
  // { label: '(合作批发)', value: 126 },
])
const moneyIndex = $ref(0)

const count = $ref(1)

const money = computed(() => {
  const temp = list.filter(it => it.status)
  const yes = temp.some(it => it.name === '坐席服务')
  let total = temp.reduce((a, b) => a + b.price, 0)
  if (yes && temp.length > 1)
    total = total - 180
  return total
})
const capitalNumbers = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
</script>

<template>
  <div overflow-auto>
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

        <div v-for="(i, index) in list" :key="i.id" class="mt-3">
          {{ capitalNumbers[index] }}：{{ i.description }}
        </div>

        <!-- <div flex text-xl items-center mt-7>
          <div mr-10>服务期限:</div>
          <button text-2xl @click="count--">—</button>
          <div rounded-lg px-3 py-1 style="background-color: #6b7280;" mx-3>{{ count }}</div>
          <button mr-3 text-3xl @click="count++">+</button>
          <div>/ 年</div>
        </div> -->

        <div flex="~ col" text-xl mt-5>
          <div mr-10 text-left mb5>服务费用</div>

          <div flex="~ wrap mt-3">
            <button
              v-for="(i) in list" :key="i.name" b="2 solid transparent" mr-5 mb-5 rounded px-3 py-1 relative
              style="background-color: #4b5563;" :class="i.status && 'b-blue-5! text-primary bg-transparent'"
              @click="i.status = !i.status"
            >
              <i v-if="i.status" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
              <div flex="~ col" p-3 rounded>
                <span text-blue-5 text-base>{{ i.name }}</span>
                <span text-yellow5 text-sm mt-3>{{ i.price }}元 / {{ i.unitType }}</span>
              </div>
            </button>
          </div>

          <!-- <button v-for="(i, index) in list1" :key="i.value" b="2 solid transparent" mr-5 rounded px-3 py-1 relative
            style="background-color: #4b5563;" :class="moneyIndex === index && 'b-blue-5 text-primary bg-auto'"
            @click="moneyIndex = index">
            <i v-if="moneyIndex === index" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
            ¥ {{ i.value }} / 项 <span text-sm style="color: #d1d5db" ml-1>{{ i.label }}</span>
          </button> -->
        </div>

        <div b="0 b-1 solid" style="border-color: #e5e7eb;" mt-10 mb-3 />
        <div style="color: #d1d5db" text-sm>
          注：以上项目任加选两项可免首年坐席服务费；次年坐席服务续费180元/年 或20元/月（选购）分钟体检服务续费888元/12次/年 或90元/次
        </div>
        <div mt-5 flex items-center>
          <div text-xl ml-auto>合计：<span text="#83E0FD">¥ {{ money }}</span></div>
          <button v-if="list.filter(i => i.status).length" bg-primary rounded ml-3 px-4 py-2 @click="submit">确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
