import './style.css'

document.querySelector('#app').innerHTML = `
  <h1>Js-Algorithm</h1></a>
  <div>Switch F12 console to see the result</div>
`

// ANCHOR deep file search
import { dfs, data as dfsData } from './js/dfs'
// console.log(
//   'deep file search:',
//   dfs((node) => node.id === '1-2-3', dfsData)
// )

// ANCHOR brinary search 二元搜尋法
import { brinarySearch, makeNumberList } from './js/brinarySearch'
let data = makeNumberList(1, 888)
console.log('brinarySearch:', brinarySearch(data, 99))
