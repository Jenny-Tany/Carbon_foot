<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">了解碳足迹</el-menu-item>
    <el-menu-item index="2">我的碳足迹</el-menu-item>
    <el-menu-item index="3">碳足迹历史</el-menu-item>
    <el-menu-item index="4">减少碳足迹</el-menu-item>
    <el-menu-item index="5">减碳计划</el-menu-item>
  </el-menu>
  <RouterView></RouterView>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const activeIndex = ref('1')
const router = useRouter()

const handleSelect = (index) => {
  switch (index) {
    case '1':
      router.push('/')
      break
    case '2':
      router.push('/person')
      break
    case '3':
      router.push('/contactList')
      break
    case '4':
      router.push('/adovocate')
      break
    case '5':
      router.push('/todoList')
      break
    default:
      break
  }
}
</script>

<style lang="scss" scoped>
</style>