module.exports = splice

function splice (array, matcher, self) {
  let i = 0
  let origin_i = 0
  let item
  for (; i < array.length; i ++, origin_i ++) {
    item = array[i]

    if (matcher.call(self, item, origin_i, array)) {
      array.splice(i --, 1)
    }
  }

  return array
}


function p (array, matcher, self) {

}
