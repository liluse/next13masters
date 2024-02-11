import { ProductImage } from "../atoms/ProductImage";
import { ProductDescription } from "../atoms/ProductDescription";
import { type ProductType } from "../types";

export const ProductCard = ({ image, name, price }: ProductType) => {
	return (
		<li>
			<article className="mx-auto max-w-80 p-1">
				<ProductImage image={image} name={name} />
				<ProductDescription name={name} price={price} />
			</article>
		</li>
	);
};
