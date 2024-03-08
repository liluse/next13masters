export const generateStaticParams = async () => {
	return [
		{ pageNumber: "1" },
		{ pageNumber: "2" },
		{ pageNumber: "3" },
	];
};

import { notFound } from "next/navigation";
import { executeGraphql } from "@/api/lib";
import { Pagination } from "@/components/molecules/Pagination";
import { ProductList } from "@/components/organisms/ProductsList";
import { ProductsGetByCategoryDocument } from "@/gql/graphql";

export default async function CategoryProductPage({
	params,
}: {
	params: {
		pageNumber: string;
		category: string;
	};
}) {
	const categories = await executeGraphql(
		ProductsGetByCategoryDocument,
		{
			slug: params.category,
		},
	);

	const products = categories.category?.products;

	if (!products) {
		notFound();
	}

	return (
		<>
			<ProductList products={products} />
			<pre>{JSON.stringify(categories, null, 2)}</pre>
			<Pagination />
		</>
	);
}
