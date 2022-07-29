import useSWR from "swr";
import { PublicConfiguration } from "swr/dist/types";

export const useProduct = (options?: Partial<PublicConfiguration>) => {
  const { data, error, mutate } = useSWR("/products", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  return {};
};
