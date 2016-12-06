export function es5() {
  var o = {}
  var consts = {}

  Object.defineProperty(consts, 'BASE', {
    value: 2
  })

  function constants(val) {
    return Math.pow(consts.BASE, val)
  }

  function scope(n) {
    var sum = 0
    for (var i = 0; i < n; i += 1) {
      sum += i
    }
    return sum
  }

  o.constants = constants
  o.scope = scope

  return o
}

export function es6() {
  let o = {}
  const base = 2

  function constants(val){
    return Math.pow(base, val)
  }

  function scope(n){
    let sum = 0
    for (let i = 0; i < n; i += 1) {
      sum += i
    }
    return i
  }

  o.constants = constants
  o.scope = scope

  return o

}
