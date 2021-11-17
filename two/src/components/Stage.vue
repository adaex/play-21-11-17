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
    <div class="title">
      <div>{{ title }}</div>
    </div>
    <div
      class="job"
      v-for="(job, idx) in jobs"
      :class="idx === 0 ? 'first-job' : 'more-job'"
    >
      <job :name="job.name" :time="job.time" :status="job.status"></job>
    </div>
  </div>
</template>

<style>
.stage-box .job {
  padding: 20px;
  position: relative;
  z-index: 100;
}

.stage-box .first-job {
  /* padding: 20px 40px; */
  padding-left: 40px;
}

.stage-box .title {
  align-self: flex-start;
  margin-left: 40px;
}

.more-job::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  border-left: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 100%;
  height: 100%;
  z-index: -1;
}
.first-job::before {
  content: '';
  position: absolute;
  top: -50%;
  left: 0;
  border-bottom: 1px solid #d9d9d9;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
