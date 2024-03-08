import { loadEnvConfig } from "@next/env";
import type { CodegenConfig } from "@graphql-codegen/cli";

loadEnvConfig(process.cwd());

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.GRAPHQL_URL,
	documents: "src/graphql/*.graphql",
	ignoreNoDocuments: true,
	generates: {
		"src/gql/": {
			preset: "client",
			presetConfig: {
				fragmentMasking: false,
			},
			config: {
				deffaultScalarType: "unknown",
				useTypeImports: true,
				skipTypename: true,
				documentMode: "string",
				enumsAsTypes: true,
			},
			plugins: [],
		},
	},
};

export default config;
