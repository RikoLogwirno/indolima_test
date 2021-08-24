import axios from "axios";

const base_url = "https://61248c196f375a001756eef9.mockapi.io/test-indo5"

export interface GetTypes extends Array<DetailTypes> {}

export interface CheckParamTypes {
  email: string;
  password: string;
}

export interface DetailTypes {
  id: number;
  createdAt: string;
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface AddTypes {

}

export interface AddParamsTypes {
  name: string;
  email: string;
  password: string;
  address: string;
}

export interface UpdateTypes {

}

export interface RemoveTypes {

}


async function get(): Promise<GetTypes | null> {
  let ret = null;
  try {
    let response = await axios.get(`${base_url}/user`);
    ret = response.data;
  } catch (error) {
    throw new Error(error);
  }
  return ret;
}

async function check(datas: CheckParamTypes): Promise<DetailTypes | null> {
  let ret: GetTypes | null = null;
  try {
    let response = await axios.get(`${base_url}/user`);
    ret = response.data;
  } catch (error) {
    throw new Error(error);
  }
  
  let found: DetailTypes | null = ret
    ?.filter(v => (v.email === datas.email && v.password === datas.password))[0] ?? null;
  
  if (!found) {
    throw new Error("User Not Found");
  }
  
  return found;
}

async function detail(id: number): Promise<DetailTypes | null> {
  let ret: DetailTypes | null = null;
  try {
    let response = await axios.get(`${base_url}/user/${id}`);
    ret = response.data;
  } catch (error) {
    throw new Error(error);
  }
  
  return ret;
}

async function add(datas: AddParamsTypes): Promise<AddTypes | null> {
  let ret = null;
  try {
    ret = await axios.post(`${base_url}/user`, datas);
  } catch (error) {
    throw new Error(error);
  }
  return ret;
}

async function update(): Promise<UpdateTypes | null> {
  let ret = null;
  try {
    // ret = await axios.put(`${base_url}/user`);
  } catch (error) {
    throw new Error(error);
  }
  return ret;
}

async function remove(): Promise<RemoveTypes | null> {
  let ret = null;
  try {
    // ret = await axios.delete(`${base_url}/user`);
  } catch (error) {
    throw new Error(error);
  }
  return ret;
}

const User = {
  get,
  check,
  detail,
  add,
  update,
  remove
}

export default User