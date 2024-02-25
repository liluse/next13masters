import { Suspense } from "react";
import { type Metadata } from "next";
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

	const title = `${product.name} - Sklep internetowy`;
	const description = product.description;
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{ url: product.coverImage.src, alt: product.coverImage.alt },
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
