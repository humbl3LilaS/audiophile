import { useQuery } from "@tanstack/react-query";
import { getProductByCategory } from "./api";

export const useGetProductByCategory = (category: string) => {
	return useQuery({
		queryKey: [category],
		queryFn: () => getProductByCategory(category),
		staleTime: 24 * 60 * 1000,
	});
};
