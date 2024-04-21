import axios from "axios";

export const getCondition = async () => {
  return await axios
    .get("http://localhost:5000/condition")
    .then(({ data }) => {
      return data;
    })
    .catch((err) => {
      console.error(err);
    });
};
