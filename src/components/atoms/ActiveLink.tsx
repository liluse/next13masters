"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";
import { type Route } from "next";

export const ActiveLink = ({
	href,
	children,
	className,
	activeClassName,
	exact,
}: {
	href: Route;
	children: ReactNode;
	className?: string;
	activeClassName?: string;
	exact?: boolean;
}) => {
	const currentPathname = usePathname();

	//exact prop
	const isActive = exact
		? currentPathname === href
		: currentPathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx({
				"text-blue-400 hover:text-blue-600": true,
				underline: isActive,
				[String(className)]: className,
				[String(activeClassName)]: activeClassName && isActive,
			})}
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</Link>
	);
};
