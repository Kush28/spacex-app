import Axios from 'axios'
import { API_ENDPOINT } from '../constants'

export const fetchLaunchData = () => Axios.get(API_ENDPOINT)
