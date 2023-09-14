import prisma from "@/lib/prisma";
import HomePage from "../HomePage";
import getJobs from "@/actions/getJobs";

// async function getPosts() {
// 	const res = await fetch("https://...");
// 	const posts = await res.json();
// 	return posts;
// }

export default async function Page() {
	// Fetch data directly in a Server Component
	// const recentPosts = await getPosts();
	// Forward fetched data to your Client Component
	const jobs = await getJobs();
	return <HomePage jobs={jobs} />;
}
