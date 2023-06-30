<script setup lang="ts">
import { format, getDay } from 'date-fns'

let date = $ref(format(new Date(), 'yyyy年MM月dd日 HH:mm:ss'))
const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
let weak = $ref(weekDays[getDay(new Date())])
setInterval(() => {
  date = format(new Date(), 'yyyy年MM月dd日 HH:mm:ss')
  weak = weekDays[getDay(new Date())]
}, 1000)

// const { data: weather } = useFetch('/v7/weather/now?location=101280805&key=dcc5d99ad3e44bf69a6eb73664d6caea').json()
</script>

<template>
  <div flex="~ items-center">
    <span w-50 mr-3>{{ date }}</span>
    <span>{{ weak }}</span>
    <!-- <i text-lg :class="`i-weather:${weather?.now.icon}`" /> -->
  </div>
</template>
