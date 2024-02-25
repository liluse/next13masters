import { ActiveLink } from "../atoms/ActiveLink";

const hrefs = [
	{
		label: "1",
		href: "/products/1",
	},
	{
		label: "2",
		href: "/products/2",
	},
	{
		label: "3",
		href: "/products/3",
	},
];

export const Pagination = () => {
	return (
		<div className="flex justify-center" aria-label="pagination">
			{hrefs.map(({ href, label }) => (
				<ActiveLink href={href} key={href}>
					{label}
				</ActiveLink>
			))}
		</div>
	);
};
