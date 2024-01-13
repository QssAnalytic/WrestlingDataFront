import { instance } from ".";

const getData = async (path) => (await instance.get(path)).data;
const postData = async (path, arg, config) =>
  (await instance.post(path, arg, config)).data;

const updateData = async (path, arg) => (await instance.put(path, arg)).data;
const deleteData = async (path) => (await instance.delete(path)).data;
export { getData, postData, updateData, deleteData };
