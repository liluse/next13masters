import { ProductDescription } from "../atoms/ProductDescription";
import { ProductImage } from "../atoms/ProductImage";
import { type ProductItemType } from "../types";

export const ProductPresentation = (product: ProductItemType) => {
	return (
		<div className="mb-8 mt-2 flex flex-row">
			<div className="max-w-lg">
				<ProductImage coverImage={product.coverImage} />
			</div>
			<div>
				<ProductDescription {...product} />
			</div>
		</div>
	);
};
