import { type ProductDescriptionType } from "../types";

export const ProductDescription = ({
	name,
	price,
}: ProductDescriptionType) => {
	return (
		<>
      <p className="text-2xl uppercase">{name}</p>
      <p className="text-right text-sm font-bold">{price}</p>
		</>
	);
};
