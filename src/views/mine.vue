<script setup lang="ts">
const list = [
  { label: '安云霞', description: '擅长:老年高血压，冠心病，血脂异常的诊治' },
  { label: '陈坤', description: '擅长:老年常见慢性疾病诊治，常见老年综合症的管理' },
  { label: '王慧珍', description: '擅长:老年消化道疾病的预防和诊治' },
]
</script>

<template>
  <div flex="~ col">
    <div text-lg>专家问诊</div>
    <div grid grid-cols="[1fr_1.5fr_2fr]" mt-3 flex-1 gap-10>
      <button flex="~ col" justify-center items-center gap-3 rounded-lg style="background-image: url('/images/mine.png')" bg-no-repeat bg-cover>
        <img src="/images/mine2.png">
        <div grid grid-cols="[auto_1fr]" justify-items-start gap-3>
          <span>姓名:</span>
          <span>陆瑶瑶</span>
          <span>年龄:</span>
          <span>56</span>
          <span>身份:</span>
          <span>居家老人</span>
          <span>手机号:</span>
          <span>131****0683</span>
        </div>
      </button>
      <div grid="~ cols-2" gap-5 grid-rows="[1fr_1fr]">
        <button
          flex="~ col" justify-center items-center gap-1 rounded-lg style="background: linear-gradient(47deg, #695AF5 0%, #878DFF 100%);"
        >
          <i text-5xl i-custom:mine0 />
          <span text-xl>就诊记录</span>
        </button>
        <button flex="~ col" justify-center items-center gap-1 rounded-lg style="background: linear-gradient(227deg, #FE9B62 0%, #FEB487 100%);">
          <i text-5xl i-custom:mine1 />
          <span text-xl>服务记录</span>
        </button>
        <button
          flex="~ col" justify-center items-center gap-1 rounded-lg style="background: linear-gradient(49deg, #259BFF 0%, #6DBCFF 100%);"
        >
          <i text-5xl i-custom:mine2 />
          <span text-xl>购买记录</span>
        </button>
        <button flex="~ col" justify-center items-center gap-1 rounded-lg style="background: linear-gradient(228deg, #31D9A8 0%, #1DC8BF 100%);">
          <i text-5xl i-custom:mine3 />
          <span text-xl>智能设备</span>
        </button>
      </div>

      <button flex="~ col" justify-center items-center gap-5 rounded-lg style="background: rgba(58, 85, 124, 80%);">
        <i text-5xl i-custom:mine4 />
        <span text-xl>智能设备</span>
      </button>
    </div>

    <div mt-5 mb-1 text-lg flex justify-between>
      推荐医生
      <button text-base flex items-center>更多<i i-material-symbols:chevron-right-rounded /></button>
    </div>

    <div grid="~ cols-2" flex-1 gap-8>
      <div cursor-pointer flex="~ col" bg="#5697CF" p-5 rounded-lg>
        <div text-lg font-500 mb-5>身份信息</div>
        <div grid grid-cols="[auto_1fr]" justify-items-start gap-3>
          <span>姓名:</span>
          <span>陆瑶瑶</span>
          <span>身份证类型:</span>
          <span>中国人民共和国居民身份证</span>
          <span>证件号:</span>
          <span>4405*************X</span>
        </div>
      </div>

      <div cursor-pointer flex="~ col" bg="#5697CF" p-5 rounded-lg>
        <div text-lg font-500 mb-5>医保卡</div>
        <div grid grid-cols="[auto_1fr]" justify-items-start gap-5>
          <img src="/images/mine1.png">
          <div>
            <div>医保电子凭证</div>
            <div mt-2>4405*************X | 陈瑶瑶</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  title: 个人中心
  order: 8
</route>
