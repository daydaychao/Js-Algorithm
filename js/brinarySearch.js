export function makeNumberList(min, max) {
  let array = []

  for (let i = min; i <= max; i++) {
    array.push(i)
  }
  return array
}

export function brinarySearch(data, item) {
  if (!item || !data) return
  let list = data.map((x) => x).sort((a, b) => a - b)

  let low = 0
  let high = list.length - 1
  let counter = 1

  console.log(`Result is  ${item}`)

  while (counter < 20) {
    printLogs(counter, list, high, low)

    let middle = parseInt((low + high) / 2)
    let guess = list[middle] // 不停地猜測

    if (guess == item) {
      console.log(`猜對了: ${guess}`)
      return data[middle]
    } //

    if (guess > item) {
      console.log(`猜過高: ${guess}`)
      high = middle - 1
    }

    if (guess < item) {
      console.log(`猜過低: ${guess}`)
      low = middle + 1
    }
    counter++
  }
  return '沒有此數字'
}

function printLogs(counter, list, high, low) {
  let color = 'color: skyblue'
  console.log(`\n`)
  console.log(`%c${counter}. Guess ${list[low]}, ${list[high]}`, color)
  console.log(`%c=================`, color)
}

// brinarySearch(data, 100)
