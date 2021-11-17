### 题目一

实现一个工具函数，给定 csv 字符串文件，转换成对象结构 (并提供测试用例)

```ts
/**
 * interface Person {
 *   name: string;
 *   age: number;
 *   parent: Person[];
 *   children: Person[];
 * }
 */

const csv = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`
```

### 题目实现

核心代码实现如下：

```ts
const parse = (csv: string): Person[] => {
  const headerMap = {} as Record<string, number>
  const dataMap = {} as Record<string, Person>
  const res = [] as Person[]
  // 处理成二维数组
  const lines = csv
    .trim()
    .split('\n')
    .map((line) => line.split(','))
  if (lines.length < 1) return res

  // 获得头部
  const header = lines.shift() || []
  header.forEach((key, i) => (headerMap[key] = i))

  // 获得数据
  lines.forEach((line) => {
    // 此处因为数据格式固定，所以直接通过名字获取数据
    // 如果header不固定，可以通过headerMap动态获取
    const name = line[headerMap.name] || ''
    const age = Number(line[headerMap.age])
    const parent = line[headerMap.parent] || ''
    dataMap[name] = { name, age, parent, children: [] }
  })

  // 将列表转换为类似树的形式
  const names = Object.keys(dataMap)
  names.forEach((name) => {
    const parent = dataMap[name].parent
    if (parent === '') {
      // 没有parent，则加入到结果中
      res.push(dataMap[name])
    } else {
      // 加入到父的children中
      dataMap[parent].children.push(dataMap[name])
    }
  })
  return res
}
```

完整源代码详见 [one/main.ts](one/main.ts)
