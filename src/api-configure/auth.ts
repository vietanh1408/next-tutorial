import { ILoginPayload, IRegisterPayload } from "@/models/index";
import axiosClient from "./axios-client";

export const authApi = {
  login(payload: ILoginPayload) {
    return axiosClient.post("/auth/login", payload);
  },

  register(payload: IRegisterPayload) {
    return axiosClient.post("/auth/register", payload);
  },

  logout() {
    return axiosClient.post("/auth/logout");
  },
};
