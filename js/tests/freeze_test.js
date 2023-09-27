export const tests = []
const t = (f) => tests.push(f)
const isConst = (name) => {
  try {
    eval(`${name} = 'm'`)
    return false
  } catch (err) {
    return true
  }
}

// arr
t(() => Array.isArray(arr)) // arr is declared and is an array
t(({ eq }) => eq(arr[0], 4)) // arr first element is 4
t(({ eq }) => eq(arr[1], '2')) // arr second element is "2"
t(({ eq }) => eq(arr.length, 2)) // arr length is 2

// obj
// obj is declared and of type object
t(() => obj.constructor === Object)
// obj is constant and can not be re-assigned
t(({ fail }) => obj && fail(() => (obj = 10)))
// obj.str is of type string
t(() => typeof obj.str === 'string')
// obj.num is of type number
t(() => typeof obj.num === 'number')
// obj.bool is of type boolean
t(() => typeof obj.bool === 'boolean')
// obj.undef is of type undefined
t(() => 'undef' in obj && typeof obj.undef === 'undefined')

// check if all variable are const
t(() => ['arr', 'obj']
  .every(isConst))
