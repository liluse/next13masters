import { getProductsList } from "@/api/products";
import { ProductList } from "@/components/organisms/ProductsList";

export default async function ProductsPage() {
	const products = await getProductsList();
	return <ProductList products={products} />;
}
