<script setup>
import { reactive } from '@vue/reactivity'
import Stage from './components/Stage.vue'

const pipeline = reactive([
  {
    title: '编译',
    jobs: [{ status: 'success', name: '代码编译', time: 10e3 }],
  },
  {
    title: '部署',
    jobs: [{ status: 'success', name: '构建物部署', time: 71e3 }],
  },
  {
    title: '扫描与检查',
    jobs: [
      { status: 'success', name: '代码扫描', time: 51e3 },
      { status: 'success', name: '代码检查', time: 32e3 },
    ],
  },
  {
    title: '集成测试',
    jobs: [
      { status: 'success', name: '单元测试', time: 101e3 },
      { status: 'fail', name: '集成测试', time: 79e3 },
    ],
  },
])
</script>

<template>
  <div class="pipeline">
    <stage
      v-for="stage in pipeline"
      class="stage"
      :title="stage.title"
      :jobs="stage.jobs"
    ></stage>
  </div>
</template>

<style>
.pipeline {
  display: flex;
}
.pipeline .stage {
  margin-left: 20px;
}
</style>
