<script setup lang="ts">
const list = [
  { label: '安云霞', description: '擅长:老年高血压，冠心病，血脂异常的诊治' },
  { label: '陈坤', description: '擅长:老年常见慢性疾病诊治，常见老年综合症的管理' },
  { label: '王慧珍', description: '擅长:老年消化道疾病的预防和诊治' },
]
</script>

<template>
  <div flex="~ col">
    <div text-lg>
      专家问诊
    </div>
    <div grid grid-cols="[1fr_1fr_2fr]" mt-3 flex-1 gap-10>
      <button flex="~ col" justify-center items-center gap-3 rounded-lg style="background: linear-gradient(180deg, #62D5AA 0%, #3FD481 100%);">
        <i text-5xl i-custom:inquiry />
        <span text-xl>预约挂号</span>
      </button>
      <div grid="~ cols-2" gap-5 grid-rows="[2fr_1fr]">
        <button col-span-2 flex="~ col" justify-center items-center gap-3 rounded-lg style="background: linear-gradient(180deg, #3FCFE5 0%, #2D7FD8 100%);">
          <i text-5xl i-custom:inquiry1 />
          <span text-xl>看病</span>
        </button>
        <button flex="~ col" justify-center items-center gap-1 rounded-lg style="background: linear-gradient(180deg, #FCA69F 0%, #F77F7B 100%);">
          <i text-5xl i-custom:inquiry2 />
          <span text-xl>买药</span>
        </button>
        <button flex="~ col" justify-center items-center gap-1 rounded-lg style="background: #F7BE29;">
          <i text-5xl i-custom:inquiry3 />
          <span text-xl>送药</span>
        </button>
      </div>

      <div flex-1 overflow-hidden>
        <video w-full h-full rounded-lg bg-cover controls poster="/images/inquiry.png">
          <source src="/images/test.mp4" type="video/mp4">
        </video>
      </div>
    </div>

    <div mt-5 mb-1 text-lg flex justify-between>
      推荐医生
      <button text-base flex items-center>
        更多<i i-material-symbols:chevron-right-rounded />
      </button>
    </div>

    <div grid="~ cols-3" flex-1 gap-8>
      <div v-for="(i, index) in list" :key="i.label" cursor-pointer overflow-hidden flex="~ col" bg="#04094B" p-5 style="border: 1px dashed #5187ED;">
        <div grid grid-cols="[auto_1fr]" gap-3>
          <div flex-1 bg-no-repeat w-15 h-15 bg-cover rounded-full :style="`background-image: url('/images/inquiry-${index}.png');`" />
          <div>
            <div text-blue-600 text-lg font-500>
              {{ i.label }}
            </div>
            <div mt-4 op70 whitespace-nowrap>
              {{ i.description }}
            </div>
          </div>
        </div>

        <div grid="~ cols-2 gap-3" mt-auto>
          <button px-5 py-3 bg-blue-600 rounded>
            预约挂号
          </button>
          <button px-5 py-3 b="1 solid blue-5" rounded>
            在线咨询
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 专家问诊
  order: 7
</route>
