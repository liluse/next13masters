import { ProductList } from "@/components/organisms/ProductsList";
import { type ProductType } from "@/components/types";

const products: ProductType[] = [
	{
		id: 1,
		name: "Róże niebieskie",
		price: 100,
		image: "/blue.jpeg",
	},
	{
		id: 2,
		name: "Róże czerwone",
		price: 200,
		image: "/red.jpeg",
	},
	{
		id: 3,
		name: "Róże herbaciane",
		price: 300,
		image: "/herb.jpeg",
	},
	{
		id: 4,
		name: "Róże różowe",
		price: 400,
		image: "/pink.jpeg",
	},
];

export default function Home() {
	return (
		<section className="mx-auto">
			<ProductList products={products} />
		</section>
	);
}
