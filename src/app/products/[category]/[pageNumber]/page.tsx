export const generateStaticParams = async ({
	params,
}: {
	params: { category: string };
}) => {
	if (params.category === "kategoria-1") {
		return [{ pageNumber: "1" }, { pageNumber: "2" }];
	}

	return [{ pageNumber: "1" }];
};

export default function CategoryProductPage({
	params,
}: {
	params: {
		category: string;
		pageNumber: string;
	};
}) {
	return (
		<h1>
			Produkty z kategorii {params.category}, strona
			{params.pageNumber}
		</h1>
	);
}
