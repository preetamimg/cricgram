import axios from "axios";
import { BASE_URL } from "../constants";


// no auth token required
export const getAPI = async (url, body) => {
  const response = await axios.get(`${BASE_URL}/${url}`, body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  return response;
};

export const getAPIAuth = async (url, tokenInit) => {
//   const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.get(`${BASE_URL}/${url}`, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        // Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    

    return response;
  } catch (error) {
    if (error?.response?.data?.msg === "Invalid token") {
    //   localStorage.removeItem(TOKEN_NAME);
    //   localStorage.removeItem(BT_TOKEN_NAME);
    }
    throw new Error(error);
  }
};

// no auth token required
export const postAPI = async (url, params) => {
  const response = await axios.post(`${BASE_URL}/${url}`, params, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Accept: "application/json",
    },
  });
  return response;
};

export const postAPIAuth = async (url, params, tokenInit) => {
//   const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.post(`${BASE_URL}/${url}`, params, {
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        // Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    return response;
  } catch (error) {
    if (error?.response?.data?.msg === "Invalid token") {
    //   localStorage.removeItem(TOKEN_NAME);
    //   localStorage.removeItem(BT_TOKEN_NAME);
    }
    throw new Error(error);
  }
};

export const postAPIAuthFormData = async (url, params, tokenInit) => {
//   const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios({
      method: "post",
      url: `${BASE_URL}/${url}`,
      data: params,
      headers: {
        "Content-Type": "multipart/form-data",
        // Authorization: `Bearer ${tokenInit ? tokenInit : token}`,
      },
    });
    return response;
  } catch (error) {
    
  }
};


export const deleteAPIAuth = async (url) => {
//   const token = localStorage.getItem(TOKEN_NAME);
  try {
    const response = await axios.delete(`${BASE_URL}/${url}`, {
      headers: {
        // Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
