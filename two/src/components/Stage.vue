<script setup>
import { defineProps } from 'vue'
import Job from './Job.vue'

defineProps({
  title: String,
  jobs: Object,
})
</script>

<template>
  <div class="stage-box">
    <div class="title">{{ title }}</div>
    <div class="job" v-for="job in jobs">
      <job :name="job.name" :time="job.time" :status="job.status"></job>
    </div>
  </div>
</template>

<style scoped>
.stage-box .job {
  margin-top: 20px;
}
</style>
