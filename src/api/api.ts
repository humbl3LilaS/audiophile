import { Query } from "appwrite";
import { appwriteConfig, database } from "./client";

export const getAllHeadphones = async () => {
	try {
		const data = await database.listDocuments(
			appwriteConfig.dbId,
			appwriteConfig.products,
			[Query.equal("category", "headphones")],
		);
		return data.documents;
	} catch (error) {
		console.log(error);
		throw new Error("Error fetching");
	}
};
