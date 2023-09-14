import React from "react";
import { Job } from "@prisma/client";

interface HomePageProps {
	jobs: Job[];
}

const HomePage = ({ jobs }: HomePageProps) => {
	return (
		<div>
			{jobs.map((post) => (
				<h1 key={post.id}>{post.title}</h1>
			))}
		</div>
	);
};

export default HomePage;
