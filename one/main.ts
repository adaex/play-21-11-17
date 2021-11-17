interface Person {
  name: string
  age: number
  parent: string
  children: Person[]
}

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

// 测试用例

const csv1 = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
`
const csv2 = `
name,age,parent
Bob,30,David
David,60,
Anna,10,Bob
Tim,21,David
`

const csv3 = `
name,parent,age,aaa,bbb
Bob,David,30,1,2
David,,60,3,4
Anna,Bob,10,5,6
Tim,David,21,7,8
`

// 执行测试

console.log('%j', parse(csv1)) // [{"name":"David","age":60,"parent":"","children":[{"name":"Bob","age":30,"parent":"David","children":[{"name":"Anna","age":10,"parent":"Bob","children":[]}]}]}]
console.log('%j', parse(csv2)) // [{"name":"David","age":60,"parent":"","children":[{"name":"Bob","age":30,"parent":"David","children":[{"name":"Anna","age":10,"parent":"Bob","children":[]}]},{"name":"Tim","age":21,"parent":"David","children":[]}]}]
console.log('%j', parse(csv3)) // [{"name":"David","age":60,"parent":"","children":[{"name":"Bob","age":30,"parent":"David","children":[{"name":"Anna","age":10,"parent":"Bob","children":[]}]},{"name":"Tim","age":21,"parent":"David","children":[]}]}]
