import { Suspense } from "react";
import { type Metadata } from "next";
import { getProductById, getProductsList } from "@/api/products";
import { ProductDescription } from "@/components/atoms/ProductDescription";
import { ProductImage } from "@/components/atoms/ProductImage";
import { SuggestedProductsList } from "@/components/organisms/SuggestedProducts";

export const generateStaticParams = async () => {
	const products = await getProductsList();

	return products.map((product) => ({
		productId: product.id,
	}));
};

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
			<article className="mx-auto max-w-80 p-1">
				<ProductImage coverImage={product.coverImage} />
				<ProductDescription {...product} />
			</article>
			<aside>
				<Suspense fallback="Ładowanie...">
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
}
