const a = new Map()
a.set('name', 'Alice')
a.set('age', 30)
console.log(a.has('name')) // true
console.log(a.get('age')) // 30

a.forEach((value, key) => {
  console.log(`${key}: ${value}`)
})
