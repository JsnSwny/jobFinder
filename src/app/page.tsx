import prisma from "../../lib/prisma";
import HomePage from "./HomePage";

// async function getPosts() {
// 	const res = await fetch("https://...");
// 	const posts = await res.json();
// 	return posts;
// }

export default async function Page() {
	// Fetch data directly in a Server Component
	// const recentPosts = await getPosts();
	// Forward fetched data to your Client Component
	const data = await prisma.job.findMany({
		skip: 2,
		take: 5,
	});
	return <HomePage jobs={data} />;
}
