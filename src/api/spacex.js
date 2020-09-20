/* eslint-disable camelcase */
import Axios from 'axios'
import { API_ENDPOINT } from '../constants'

function parseData(data) {
  return data.map(
    ({ mission_name, flight_number, mission_id, launch_year, launch_success, rocket, links }) => {
      const missionImage = links.mission_patch_small
      const missionName = `${mission_name} #${flight_number}`
      let landSuccess = rocket.first_stage.cores[0].land_success || false
      if (rocket.first_stage.cores.length > 1) {
        landSuccess = !!rocket.first_stage.cores.find((core) => core.land_success === true)
      }

      return {
        missionName,
        missionImage,
        missionIds: mission_id,
        launchYear: launch_year,
        launchSuccess: launch_success !== null ? launch_success.toString() : 'null',
        landSuccess: landSuccess.toString(),
      }
    },
  )
}

export async function fetchLaunchData(queryString) {
  const { data } = await Axios.get(`${API_ENDPOINT}${queryString}`)
  return parseData(data)
}
