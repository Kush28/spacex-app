function stringToBool(str) {
  if (str === 'undefined') return null
  if (str === undefined) return null
  if (str === 'true') return true
  if (str === 'false') return false
  return str
}

export default function sanatizeFilterObject(obj = {}) {
  const { year, launch, landing } = obj
  const result = {
    year: year || null,
    launch: stringToBool(launch),
    landing: stringToBool(landing),
  }
  return result
}
