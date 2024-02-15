import { instance, dashboard } from ".";

// Video App queries
const getData = async (path) => (await instance.get(path)).data;
const postData = async (path, arg, config) => (await instance.post(path, arg, config)).data;

const updateData = async (path, arg) => (await instance.put(path, arg)).data;
const updateState = async (path, { arg }) => (await instance.put(path, arg)).data;
const deleteData = async (path) => (await instance.delete(path)).data;

// Dashboard App queries

const getDashboardData = async (path) => (await dashboard.get(path)).data;
const posDashboardtData = async (path, arg, config) => (await dashboard.post(path, arg, config)).data;

const updateDashboardData = async (path, arg) => (await dashboard.put(path, arg)).data;
const deleteDashboardData = async (path) => (await dashboard.delete(path)).data;

export {
  getData,
  postData,
  updateData,
  updateState,
  deleteData,
  getDashboardData,
  posDashboardtData,
  updateDashboardData,
  deleteDashboardData,
};
