export type ProductType = {
	id: number;
	name: string;
	price: number;
	image: string;
};

export type ProductItemType = {
	id: string;
	name: string;
	price: number;
	category: string;
	description: string;
	coverImage: {
		alt: string;
		src: string;
	};
};

export type ProductImageType = Pick<ProductItemType, "coverImage">;

export type ProductDescriptionType = Pick<
	ProductType,
	"name" | "price"
>;
