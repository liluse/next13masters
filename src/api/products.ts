import { executeGraphql } from "./lib";
import {
	ProductsGetListDocument,
	ProductGetDetailsDocument,
} from "@/gql/graphql";

export interface Rating {
	rate: number;
	count: number;
}

export const getProductsList = async (pageNumber: string) => {
	const take = 10;
	const skip = (Number(pageNumber) - 1) * take;

	const graphqlResponse = await executeGraphql(
		ProductsGetListDocument,
		{
			take,
			skip,
		},
	);

	return graphqlResponse.products;
};

export const getProductById = async (id: string) => {
	const graphqlResponse = await executeGraphql(
		ProductGetDetailsDocument,
		{
			id: id,
		},
	);

	return graphqlResponse.product;
};
