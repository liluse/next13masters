import { ProductDescription } from "../atoms/ProductDescription";
import { ProductImage } from "../atoms/ProductImage";
import { type ProductListItemFragmentFragment } from "@/gql/graphql";

export const ProductPresentation = (
	product: ProductListItemFragmentFragment,
) => {
	return (
		<div className="mb-8 mt-2 flex flex-row">
			<div className="max-w-lg">
				{product.images[0]?.url && (
					<ProductImage
						url={product.images[0].url}
						alt={product.images[0].alt}
					/>
				)}
			</div>
			<div>
				<ProductDescription {...product} />
			</div>
		</div>
	);
};
