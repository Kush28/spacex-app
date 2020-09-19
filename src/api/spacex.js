import Axios from "axios";
import { API_ENDPOINT } from "../constants";

export const fetchLaunches = () => Axios.get(API_ENDPOINT);
