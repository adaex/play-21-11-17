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
      v-for="(stage, idx) in pipeline"
      class="stage"
      :class="{
        'first-stage': idx === 0,
        'last-stage': idx === pipeline.length - 1,
      }"
      :title="stage.title"
      :jobs="stage.jobs"
    ></stage>
  </div>
</template>

<style lang="scss">
.pipeline {
  display: flex;
  .stage {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
  }
  .first-stage {
    .job {
      padding-left: 0;
    }
    .title {
      margin-left: 0;
    }
  }
  .last-stage {
    .job {
      padding-right: 0;
    }
    .more-job::before {
      border-right: 0;
    }
  }
}
</style>
