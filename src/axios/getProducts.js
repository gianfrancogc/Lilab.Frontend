import axios from "axios";


const baseUrl = "https://localhost:44329/api/product";

export const peticionGet = async () => {
  await axios
    .get(baseUrl)
    .then((response) => {
        return response.data
    })
    .catch((error) => {
      console.error(error);
    });
};
