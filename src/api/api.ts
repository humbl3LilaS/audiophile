import { Query } from "appwrite";
import { appwriteConfig, database } from "./client";

export const getProductByCategory = async (category: string) => {
	try {
		const data = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.products,
			[Query.equal("category", category)],
		);
		return data.documents;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching");
	}
};

export const getProductById = async (product_id: string) => {
	try {
		const data = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.products,
			[Query.equal("$id", product_id)],
		);
		return data.documents[0];
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching");
	}
};

export const getInBoxItemByProductId = async (product_id: string) => {
	try {
		const data = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.includes,
			[Query.equal("product_id", product_id)],
		);
		return data.documents;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching");
	}
};

export const getImagesByProductId = async (product_id: string) => {
	try {
		const data = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.gallery,
			[Query.equal("product_id", product_id)],
		);
		return data.documents;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching");
	}
};
