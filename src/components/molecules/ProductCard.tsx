import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { type ProductItemType } from "../types";

export const ProductCard = (product: ProductItemType) => {
	const { coverImage } = product;

	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="mx-auto max-w-80 p-1">
					<ProductImage coverImage={coverImage} />
					<ProductDescription {...product} />
				</article>
			</Link>
		</li>
	);
};
