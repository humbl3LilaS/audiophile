import { useQuery } from "@tanstack/react-query";
import { getAllHeadphones } from "./api";

export const useGetAllHeadphones = () => {
	return useQuery({
		queryKey: ["headphones"],
		queryFn: getAllHeadphones,
		staleTime: 24 * 60 * 1000,
	});
};
