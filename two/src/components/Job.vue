<script setup>
import { defineProps } from 'vue'
import { timeFormat } from '../utils/time'
defineProps({
  name: String,
  status: String,
  time: Number,
})
</script>

<template>
  <div class="job-container">
    <div class="status">{{ status === 'success' ? '✅' : '❌' }}</div>
    <div class="name">{{ name }}</div>
    <div class="time">{{ timeFormat(time) }}</div>
  </div>
</template>

<style scoped>
.job-container {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  width: 200px;
  height: 50px;
  border: 1px solid rgb(238, 237, 237);
  border-radius: 25px;
}
.job-container > div {
  flex-direction: row;
}
.job-container .status {
  margin-left: 10px;
}
.job-container .name {
  color: rgb(110, 109, 109);
  margin-left: 10px;
}
.job-container .time {
  color: rgb(201, 200, 200);
  margin-left: auto;
  margin-right: 10px;
}
</style>
