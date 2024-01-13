import { instance } from ".";

const getData = async (path) => (await instance.get(path)).data;
const postData = async (path, arg, config) =>
  (await instance.post(path, arg, config)).data;

const updateData = async (path, arg) =>
  (await instance.put(path, arg)).data;
export { getData, postData, updateData };
