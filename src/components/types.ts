export type ProductType = {
	id: number;
	name: string;
	price: number;
	image: string;
};

export type ProductImageType = Pick<ProductType, "image" | "name">;
export type ProductDescriptionType = Pick<
	ProductType,
	"name" | "price"
>;
