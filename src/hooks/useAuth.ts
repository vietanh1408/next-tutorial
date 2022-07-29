import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";
import { authApi } from "@/app";
import { ILoginPayload } from "@/models/index";

export const useAuth = (options?: Partial<PublicConfiguration>) => {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/users/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  const firstLoading = profile === undefined && error === undefined;

  const login = async (payload: ILoginPayload) => {
    await authApi.login(payload);
    await mutate();
  };

  const logout = async () => {
    await authApi.logout();
    mutate(null, false);
  };

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
};
