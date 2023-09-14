import React from "react";
import { Job } from "@prisma/client";

interface JobsListProps {
	jobs: Job[];
}

const JobsList = ({ jobs }: JobsListProps) => {
	return (
		<ul>
			{jobs.map((job) => (
				<h1 key={job.id}>{job.title}</h1>
			))}
		</ul>
	);
};

export default JobsList;
