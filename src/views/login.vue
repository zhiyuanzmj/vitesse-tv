<script setup lang="ts">
import type { FormInstance } from 'element-plus'
import { ElLoading, ElMessage } from 'element-plus'
import Palette from '~/layouts/Navigation/Palette.vue'

const username = $ref('')
const password = $ref('')
const user = useUserStore()
const settings = useSettingsStore()

const formRef = $shallowRef<FormInstance>()
async function submit() {
  await formRef?.validate()
  const { close } = ElLoading.service({ fullscreen: true })
  await user.login({ username, password }).finally(() => close())
  ElMessage.success('登录成功')
}

const autocomplete = useLocalStorage('autocomplete', 'new-password')
function reload() {
  if (!password)
    location.reload()
}
</script>

<template>
  <div flex="~ col" w-screen h-screen p-5 pb-20 bg="zinc-50 dark:zinc-900">
    <Palette absolute right-5 top-5 text-base />
    <el-form
      ref="formRef"
      size="large"
      :model="{ username, password }"
      z-1
      m-auto
      p-7
      lt-sm-p-5
      sm:min-w-84
      bg="white dark:zinc-800"
      flex="~ col"
      box-content
      rounded-lg
      shadow-lg
      @submit.prevent="submit"
    >
      <div flex items-center gap-3>
        <img :src="settings.logo" h-15 select-none>
        <div>
          <div tracking-widest whitespace-nowrap font-extrabold text="4xl gray-700 dark:gray-100">
            {{ settings.name }}
          </div>
          <p text="gray-500">
            {{ settings.description }}
          </p>
        </div>
      </div>
      <div text="center sm gray-400" mt-2 mb-3>
        —— 用户登陆 ——
      </div>

      <el-form-item :rules="{ required: true, message: '不能为空' }" prop="username">
        <el-input v-model="username" placeholder="用户名">
          <template #prefix>
            <i i-ep:user />
          </template>
        </el-input>
      </el-form-item>
      <el-form-item :rules="{ required: true, message: '不能为空' }" prop="password">
        <el-input v-model="password" type="password" :autocomplete="autocomplete" show-password placeholder="密码">
          <template #prefix>
            <i i-ep:lock />
          </template>
        </el-input>
      </el-form-item>
      <el-checkbox v-model="autocomplete" mr="!auto" mt="-4" true-label="on" false-label="new-password" label="记住密码" @click="reload" />
      <el-button type="primary" bg-primary z-1 native-type="submit">
        登录
      </el-button>
    </el-form>

    <!-- <div class="mx-auto my-10 tracking-widest text-gray-400 text-sm font-medium">CopyRight © 2022-present 广东东为</div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: login
  title: 登陆
  permission: false
  hidden: true
</route>
