/*
 * @lc app=leetcode.cn id=830 lang=javascript
 *
 * [830] 较大分组的位置
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[][]}
 */
const largeGroupPositions = s => {
  const indexArr = s.match(new RegExp(/(\w)\1{2,}/g))
  const result = []
  if (indexArr && indexArr.length > 0) {
    let pre = 0
    indexArr.forEach(item => {
      const index = s.indexOf(item)
      result.push([pre + index, pre + index + item.length - 1])
      s = s.slice(index + item.length, s.length)
      pre += index + item.length
    })
  }
  return result
}

// @lc code=end
