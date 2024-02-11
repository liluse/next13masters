import { ProductCard } from "../molecules/ProductCard";
import { type ProductType } from "../types";

export const ProductList = ({
	products,
}: {
	products: ProductType[];
}) => {
	return (
		<ul
			data-testid="products-list"
			className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
		>
			{products.map((product) => (
				<ProductCard key={product.id} {...product} />
			))}
		</ul>
	);
};
