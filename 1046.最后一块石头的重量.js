/*
 * @lc app=leetcode.cn id=1046 lang=javascript
 *
 * [1046] 最后一块石头的重量
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {number}
 */

const pickBiggest = arr => {
  let maxIndex = 0 //获取最小值
  for (let i in arr) {
    if (arr[i] > arr[maxIndex]) {
      maxIndex = i
    }
  }
  return arr.splice(maxIndex, 1)
}

const lastStoneWeight = stones => {
  while (stones.length > 1) {
    let max1 = pickBiggest(stones)
    let max2 = pickBiggest(stones)
    if (max1 !== max2) {
      stones.push(max1 - max2)
    }
  }
  return stones[0] || 0
}

// @lc code=end
