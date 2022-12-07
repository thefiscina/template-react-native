import apiBase from "./api";



export const POST = (url, body) => {
  return apiBase.post(`${url}`, body);
}

export const GET = (url) => {
  return apiBase.get(`${url}`);
}


export const PUT = (url, body) => {
  return apiBase.put(`${url}`, body);
}

export const DELET = (url) => {
  return apiBase.delete(`${url}`);
}

