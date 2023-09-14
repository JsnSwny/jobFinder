import React from "react";

const HomePage = ({ jobs }) => {
	return (
		<div>
			{jobs.map((post) => (
				<h1>{post.title}</h1>
			))}
		</div>
	);
};

export default HomePage;
