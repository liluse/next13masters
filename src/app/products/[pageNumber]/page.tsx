export const generateStaticParams = async () => {
	return [
		{ pageNumber: "1" },
		{ pageNumber: "2" },
		{ pageNumber: "3" },
	];
};

import { notFound } from "next/navigation";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductsList";
import { getProductsList } from "@/api/products";

export default async function ProductsPage({
	params,
}: {
	params: {
		pageNumber: string;
	};
}) {
	const products = await getProductsList(params.pageNumber);

	if (!products.data.length) {
		notFound();
	}

	return (
		<>
			<ProductList products={products.data} />
			<Pagination />
		</>
	);
}
