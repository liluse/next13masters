import { Suspense } from "react";
import { type Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductById } from "@/api/products";
import { SuggestedProductsList } from "@/components/organisms/SuggestedProducts";
import { ProductPresentation } from "@/components/molecules/ProductPresentation";

export const generateMetadata = async ({
	params,
}: {
	params: {
		productId: string;
	};
}): Promise<Metadata> => {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	const title = `${product.name} - Sklep internetowy`;
	const description = product.description;
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: product.images[0]?.url || "",
					alt: product.images[0]?.alt,
				},
			],
		},
	};
};

export default async function SingleProductPage({
	params,
}: {
	params: {
		productId: string;
	};
}) {
	const product = await getProductById(params.productId);

	if (!product) {
		notFound();
	}

	return (
		<>
			<article className="mx-auto p-1">
				<ProductPresentation {...product} />
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
