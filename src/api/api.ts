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
