import { Client, Databases } from "appwrite";

export const client = new Client()
	.setEndpoint("https://cloud.appwrite.io/v1")
	.setProject(import.meta.env.VITE_PJ_ID);

export const database = new Databases(client);

export const appwriteConfig = {
	dbId: import.meta.env.VITE_APPWRITE_DB_ID,
	gallery: import.meta.env.VITE_APPWRITE_DB_GALLERY_ID,
	includes: import.meta.env.VITE_APPWRITE_DB_INCLUDES_ID,
	products: import.meta.env.VITE_APPWRITE_DB_PRODUCTS_ID,
};
