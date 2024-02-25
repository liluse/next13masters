export const generateStaticParams = async () => {
	return [
		{ pageNumber: "1" },
		{ pageNumber: "2" },
		{ pageNumber: "3" },
	];
};

import { getProductsList } from "@/api/products";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductsList";

export default async function CategoryProductPage({
	params,
}: {
	params: {
		pageNumber: string;
	};
}) {
	const products = await getProductsList(Number(params.pageNumber));

	return (
		<>
			<ProductList products={products} />
			<Pagination />
		</>
	);
}
