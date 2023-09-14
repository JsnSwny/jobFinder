import React from "react";

export default async function SiteLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <div className="container mx-auto">{children}</div>;
}
