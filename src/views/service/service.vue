<script setup lang="ts">
const list = ref([
  { label: '坐席服务', money: 180, unit: '/年', status: 1 },
  { label: '智慧穿戴', money: 600, unit: '/项', status: 0 },
  { label: '分钟诊所(12次)', money: 888, unit: '/年', status: 0 },
  { label: '家居守护', money: 2500, unit: '/项', status: 0 },
  { label: '适老化改造', money: 2600, unit: '/项', status: 0 },
  { label: '安防服务', money: 2500, unit: '/项', status: 0 },
])

const list1 = $ref([
  { label: '(个人)', value: 180 },
  // { label: '(合作批发)', value: 126 },
])
const moneyIndex = $ref(0)

const count = $ref(1)

const money = computed(() => {
  let temp = list.value.filter(it => it.status)
  let yes = temp.some(it => it.label == '坐席服务')
  let total = temp.reduce((a, b) => a + b.money, 0)
  if (yes && temp.length > 1) total = total - 180
  return total
})
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

        <div class="mt-3">
          一、坐席服务：包含老人档案管理、数据库云存储、坐席呼援告警服务、保健咨询服务、电话求助咨询、营养饮食咨询、常用家庭用药咨询、坐席关怀语音服务、上门配送服务/年
        </div>

        <div class="mt-3">
          二、智慧穿戴：包含一键告警、定位+足迹回放、语音信息、一键电话拨号、电子围栏预警、健康数据监测、白名单接听保护、定时健康检测、语音报时（配智能老人手表L16型) /项
        </div>

        <div class="mt-3">
          三、分钟诊所（12次/年）：包含血糖检测、尿酸检测、血压检测、心率检测、身体质量指数、血脂总胆固醇检测、甘油三脂检测、血酮检测、体温检测（健康报告及历史报告存储管理）/年
        </div>

        <div class="mt-3">
          四、家居守护：包含火柴人隐私摄像头安装及维护、监控视频云存储、摔倒告警、后台电话告警通知、配 火柴人智慧摄像头（包安装调试）、质保两年、送终身设备维护（（注：本服务需使用家庭wifi,请确保安装环境具备WIFI））
        </div>

        <div class="mt-3">
          五、适老化改造：包含室内改造评估、室内改造设计、室内改造安装、配:挂墙式沐浴椅、一字扶手、上翻扶手、圆弧沐浴花洒扶手、扶手式洗脸盆、扶手式毛巾架（送一年维保）
        </div>

        <div class="mt-3">
          六、安防服务：送安防传感器安装及一年维保、门禁告警、漏水告警、漏气告警、烟雾告警、紧急呼救告警、红外布控告警、物联网中枢控制、坐席后台告警监控（配
          门磁报警，烟雾报警，燃气报警，溢水报警，便携紧急报警按钮，固定紧急报警按钮，中枢网关，红外报警器）
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
            <button v-for="(i) in list" :key="i.label" b="2 solid transparent" mr-5 mb-5 rounded px-3 py-1 relative
              style="background-color: #4b5563;" :class="i.status && 'b-blue-5! text-primary bg-transparent'"
              @click="i.status = !i.status">
              <i v-if="i.status" text-2xl i-custom:bottom-right absolute right-0 bottom-0 />
              <div flex="~ col" p-3 rounded>
                <span text-blue-5 text-base>{{ i.label }}</span>
                <span text-yellow5 text-sm mt-3>{{ i.money }}{{ i.unit }}</span>
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
          <button bg-primary rounded ml-3 px-4 py-2>确认服务并支付</button>
        </div>
      </div>
    </div>
  </div>
</template>
