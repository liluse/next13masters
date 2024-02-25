import { type ProductItemType } from "@/components/types";

type ProductResponseItem = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export interface Rating {
	rate: number;
	count: number;
}

export const getProductsList = async () => {
	const res = await fetch(
		"https://naszsklep-api.vercel.app/api/products",
	);

	const productsResponse =
		(await res.json()) as ProductResponseItem[];

	const products = productsResponse.map(
		ProductResponseItemToProductItemType,
	);
	return products;
};

export const getProductById = async (
	id: ProductResponseItem["id"],
) => {
	const res = await fetch(
		`https://naszsklep-api.vercel.app/api/products/${id}`,
	);

	const productResponse = (await res.json()) as ProductResponseItem;

	const product =
		ProductResponseItemToProductItemType(productResponse);

	return product;
};

const ProductResponseItemToProductItemType = (
	product: ProductResponseItem,
): ProductItemType => {
	return {
		id: product.id,
		name: product.title,
		category: product.category,
		price: product.price,
		coverImage: {
			alt: product.title,
			src: product.image,
		},
		description: product.description,
	};
};