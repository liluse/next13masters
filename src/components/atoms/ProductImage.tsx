import { type ProductImageType } from "../types";

export const ProductImage = ({ name, image }: ProductImageType) => {
	return (
		<div className="mx-auto max-w-80 overflow-hidden">
			<img
				className="transition-all hover:scale-105"
				src={image}
				alt={name}
			/>
		</div>
	);
};
