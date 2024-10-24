import { useQuery } from "@tanstack/react-query";
import {
	getImagesByProductId,
	getInBoxItemByProductId,
	getProductByCategory,
	getProductById,
} from "./api";

export const useGetProductByCategory = (category: string) => {
	return useQuery({
		queryKey: [category],
		queryFn: () => getProductByCategory(category),
		staleTime: 24 * 60 * 1000,
	});
};

export const useGetProductById = (product_id: string) => {
	return useQuery({
		queryKey: ["product", product_id],
		queryFn: () => getProductById(product_id),
		staleTime: 24 * 60 * 1000,
		enabled: !!product_id,
	});
};

export const useGetIncludedItems = (product_id: string) => {
	return useQuery({
		queryKey: ["includes", product_id],
		queryFn: () => getInBoxItemByProductId(product_id),
		staleTime: 24 * 60 * 1000,
		enabled: !!product_id,
	});
};

export const useGetGalleryImage = (product_id: string) => {
	return useQuery({
		queryKey: ["images", product_id],
		queryFn: () => getImagesByProductId(product_id),
		staleTime: 24 * 60 * 1000,
		enabled: !!product_id,
	});
};
