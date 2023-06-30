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
    <div flex mt-3 flex-1 grow="1.5">
      <button grow-1 mr-10 flex="~ col" justify-center items-center rounded-lg style="background-image: url('/images/mine.png')" bg-no-repeat bg-cover>
        <img src="/images/mine2.png" mb-3 mt-auto>
        <div flex="~ col" justify-items-start leading-7 mb-auto>
          <div flex>
            <span mr-5>姓名:</span>
            <span>陆瑶瑶</span>
          </div>
          <div flex>
            <span mr-5>年龄:</span>
            <span>56</span>
          </div>
          <div flex>
            <span mr-5>身份:</span>
            <span>居家老人</span>
          </div>
          <div flex>
            <span mr-1>手机号:</span>
            <span>131****0683</span>
          </div>
        </div>
      </button>
      <div grow="1.5" flex="~ col" mr-10 grid-rows="[1fr_1fr]">
        <div flex="~ 1" mb-5>
          <button
            flex="~ col" justify-center items-center flex-1 mr-5 rounded-lg style="background: linear-gradient(47deg, #695AF5 0%, #878DFF 100%);"
          >
            <i text-5xl i-custom:mine0 mb-1 mt-auto mx-auto />
            <span text-xl mb-auto>就诊记录</span>
          </button>
          <button flex="~ col" justify-center items-center flex-1 rounded-lg style="background: linear-gradient(227deg, #FE9B62 0%, #FEB487 100%);">
            <i text-5xl i-custom:mine1 mb-1 mt-auto mx-auto />
            <span text-xl mb-auto>服务记录</span>
          </button>
        </div>
        <div flex="~ 1">
          <button
            flex="~ col 1" justify-center items-center rounded-lg mr-5 style="background: linear-gradient(49deg, #259BFF 0%, #6DBCFF 100%);"
          >
            <i text-5xl i-custom:mine2 mb-1 mt-auto mx-auto />
            <span text-xl mb-auto>购买记录</span>
          </button>
          <button flex="~ col 1" justify-center items-center rounded-lg style="background: linear-gradient(228deg, #31D9A8 0%, #1DC8BF 100%);">
            <i text-5xl i-custom:mine3 mb-1 mt-auto mx-auto />
            <span text-xl mb-auto>智能设备</span>
          </button>
        </div>
      </div>

      <button grow-2 flex="~ col" justify-center items-center rounded-lg style="background: rgb(58, 85, 124);">
        <i text-5xl i-custom:mine4 mb-5 mt-auto mx-auto />
        <span text-xl mb-auto>智能设备</span>
      </button>
    </div>

    <div mt-5 mb-1 text-lg flex justify-between mr-1>
      推荐医生
      <button text-base flex items-center>
        更多 >
      </button>
    </div>

    <div flex flex-1>
      <div cursor-pointer mr-8 flex-1 flex="~ col" style="background-color: #5697CF;" p-5 rounded-lg>
        <div text-lg font-500 mb-5>
          身份信息
        </div>
        <div flex="~ col" justify-items-start>
          <div flex mb-3>
            <span mr-15>姓名:</span>
            <span>陆瑶瑶</span>
          </div>
          <div flex mb-3>
            <span mr-3>身份证类型:</span>
            <span>中国人民共和国居民身份证</span>
          </div>
          <div flex>
            <span mr-15>证件号:</span>
            <span>4405*************X</span>
          </div>
        </div>
      </div>

      <div cursor-pointer flex="~ col 1" style="background-color: #5697CF;" p-5 rounded-lg>
        <div text-lg font-500 mb-5>
          医保卡
        </div>
        <div flex justify-items-start>
          <img src="/images/mine1.png" mr-5>
          <div>
            <div>医保电子凭证</div>
            <div mt-2>
              4405*************X | 陈瑶瑶
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
