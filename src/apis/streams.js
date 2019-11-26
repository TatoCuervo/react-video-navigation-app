import axios from "axios";

// Local Node server for streams data
export default axios.create({
  baseURL: "http://localhost:3001"
});
