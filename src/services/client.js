import Axios from "axios";

const baseURL = "https://aqueous-cliffs-92016.herokuapp.com/";
export const Client = async (params) => {
  const { path, method, data, contentType = "application/json" } = params;
  const headers = {
    "Content-Type": `${contentType}`
  };
  let url = `${baseURL}${path}`;
  const requestBody = {
    method,
    url,
    headers,
    data: JSON.stringify(data),
    responseType: "json"
  };

  try {
    const response = await Axios(requestBody);
    const result = response;
    return result;
  } catch (error) {
    throw error;
  }
};
