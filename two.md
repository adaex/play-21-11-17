### 题目二

实现一个 pipeline 组件，不要非常准确的样式，但要实现连线效果（前端框架不限）
数据结构

```ts
interface Pipeline {
  stages: Stage[]
}

interface Stage {
  title: string
  jobs: Job[]
}

interface Job {
  name: string
  status: 'success' | 'fail'
  time: number //毫秒时间戳
}
```

### 题目实现

完整源代码详见 [two](two/)
