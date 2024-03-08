export const ProductImage = ({
	url,
	alt,
}: {
	url: string;
	alt: string;
}) => {
	return (
		<div className="aspect-square overflow-hidden rounded-md">
			<img
				className="h-full w-full object-cover object-center transition-all hover:scale-105"
				src={url}
				alt={alt}
				width={400}
				height={400}
			/>
		</div>
	);
};
