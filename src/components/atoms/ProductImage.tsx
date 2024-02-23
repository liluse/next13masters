import { type ProductImageType } from "../types";

export const ProductImage = ({ name, image }: ProductImageType) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md">
			<img
				className="h-full w-full object-cover object-center transition-all hover:scale-105"
				src={image}
				alt={name}
				width={400}
				height={400}
			/>
		</div>
	);
};
