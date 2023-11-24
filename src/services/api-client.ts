import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0ca79df3813e4363bd97c2d8a9d98ce8",
  },
});
