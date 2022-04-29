import axios from "axios";
import { getToken } from "./auth";

const apiClients = axios.create({
  baseURL: "http://localhost:2000/clients"
});

export default apiClients;