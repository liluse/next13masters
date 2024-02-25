import { type ProductImageType } from "../types";

export const ProductImage = ({ coverImage }: ProductImageType) => {
	const { src, alt } = coverImage;

	return (
		<div className="aspect-square overflow-hidden rounded-md">
			<img
				className="h-full w-full object-cover object-center transition-all hover:scale-105"
				src={src}
				alt={alt}
				width={400}
				height={400}
			/>
		</div>
	);
};
