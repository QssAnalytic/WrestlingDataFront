import axios from "axios";

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT;
const dashboarEnpoint = import.meta.env.VITE_DASHBOARD_ENDPOINT;

const instance = axios.create({
  baseURL: apiEndpoint,
});

const dashboard = axios.create({
  baseURL : dashboarEnpoint,
})

export { instance, dashboard };
