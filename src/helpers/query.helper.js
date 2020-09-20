import sanatizeFilterObject from './filters.helper'

function objectToQueryString(obj = {}) {
  return Object.keys(obj)
    .filter((key) => obj[key] !== undefined && obj[key] !== null)
    .map((key) => `${key}=${obj[key]}`)
    .join('&')
}

export function getQueryString(queryObj) {
  const sanitizedObj = sanatizeFilterObject(queryObj)
  const queryString = objectToQueryString({
    launch_success: sanitizedObj.launch,
    land_success: sanitizedObj.landing,
    launch_year: sanitizedObj.year,
  })
  return queryString ? `&${queryString}` : ''
}

export function getUrlString(queryObj) {
  const sanitizedObj = sanatizeFilterObject(queryObj)
  const urlString = objectToQueryString(sanitizedObj)
  return urlString ? `?${urlString}` : '/'
}
