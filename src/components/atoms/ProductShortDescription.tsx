import { type ProductListItemFragmentFragment } from "@/gql/graphql";
import { formatMoney } from "@/utils";

export const ProductShortDescription = ({
	name,
	price,
	categories,
}: ProductListItemFragmentFragment) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">
					{name}
				</h3>

				<p className="text-sm text-gray-500">
					<span className="sr-only">Kategoria: </span>{" "}
					{categories[0]?.name || "Brak kategorii"}
				</p>
			</div>

			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Cena:</span>
				{formatMoney(price)}
			</p>
		</div>
	);
};
