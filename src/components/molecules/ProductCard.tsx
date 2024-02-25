import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductShortDescription } from "../atoms/ProductShortDescription";
import { type ProductItemType } from "../types";

export const ProductCard = (product: ProductItemType) => {
	const { coverImage } = product;

	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="mx-auto max-w-80 p-1">
					<ProductImage coverImage={coverImage} />
					<ProductShortDescription {...product} />
				</article>
			</Link>
		</li>
	);
};
