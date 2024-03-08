import { formatMoney } from "@/utils";

export const ProductDescription = ({
	name,
	price,
	category,
}: {
	name: string;
	price: number;
	category: string;
}) => {
	return (
		<div className="flex flex-col">
			<h1 className="text-4xl font-semibold text-gray-700">{name}</h1>

			<p className="text-sm text-gray-500">
				<span className="sr-only">Kategoria: </span> {category}
			</p>

			<span className="mb-3" />

			<p className="text-xl font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price)}
			</p>
		</div>
	);
};
