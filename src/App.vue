<script setup lang="ts">
import { routes } from '@/router'
import Time from './components/Time.vue'

const routeList = routes.slice(0, 6)
</script>

<template>
  <div h-screen flex="~ col" style="background-image: url('/images/bg.png');" bg-repeat-round overflow-hidden>
    <header px-12 pt-4 pb-1 flex="~ justify-between items-center">
      <h1 font-500 text-8>
        智慧养老平台
      </h1>
      <form class="search-box" mx-auto relative flex gap-1 lt-md:mr-2 items-center role="search">
        <label for="search" btn text-sm left-2.5 top-2 absolute>
          <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 512 512"><path fill="currentColor" d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352a144 144 0 1 0 0-288a144 144 0 1 0 0 288z" /></svg>
        </label>
        <input placeholder="请输入搜索内容" class="placeholder:text-sm" b="1 white solid" pl-9 bg-transparent rounded-full leading-8 outline-none>
      </form>
      <Time />
    </header>

    <nav style="background-color:rgb(23, 37, 84)" flex justify-between px-12 py-2>
      <RouterLink
        v-for="i in routeList"
        :key="i.path"
        hover="cursor-pointer"
        px-3
        py-1
        rounded
        :to="i"
        :style="$route.name === i.name ? 'background: #3b82f6' : ''"
      >
        {{ i.meta?.title }}
      </RouterLink>
    </nav>
    <RouterView mx-12 flex-1 m5 />
  </div>
</template>
