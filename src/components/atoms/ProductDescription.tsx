import { type ProductDescriptionType } from "../types";

export const ProductDescription = ({
	name,
	price,
}: ProductDescriptionType) => {
	return (
		<>
			<h4 className="text-2xl uppercase">{name}</h4>
			<p className="text-right text-sm font-bold">{price}</p>
		</>
	);
};
