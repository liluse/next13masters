import { ProductList } from "./ProductsList";
import { getProductsList } from "@/api/products";

const sleep = (ms: number) =>
	new Promise((res) => setTimeout(res, ms));

export const SuggestedProductsList = async ({}) => {
	const products = await getProductsList(1);

	await sleep(2000);

	return <ProductList products={products.data.slice(-4)} />;
};
