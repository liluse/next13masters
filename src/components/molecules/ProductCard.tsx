import Link from "next/link";
import { ProductImage } from "../atoms/ProductImage";
import { ProductShortDescription } from "../atoms/ProductShortDescription";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const ProductCard = (
	product: ProductListItemFragmentFragment,
) => {
	return (
		<li>
			<Link href={`/product/${product.id}`}>
				<article className="mx-auto max-w-80 p-1">
					{product.images[0] && (
						<ProductImage url={product.images[0].url} alt="" />
					)}

					<ProductShortDescription {...product} />
				</article>
			</Link>
		</li>
	);
};
