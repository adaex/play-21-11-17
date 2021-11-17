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

核心原理，使用 `::before`，通过设定 `border` 属性，实现连线效果

```css
.job::before {
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
```

预览地址 <https://adaex.github.io/play-21-11-17>

完整源代码详见 [two](two/)
