import React from "react";
import { Job } from "@prisma/client";

interface JobsListProps {
	jobs: Job[];
}

const JobsList = ({ jobs }: JobsListProps) => {
	return (
		<ul className="grid grid-cols-4 gap-4 mt-8">
			{jobs.map((job) => (
				<li
					key={job.id}
					className="w-auto bg-white px-8 py-6 border-[1px] border-solid border-gray-200 rounded-lg"
				>
					<p className="text-gray-500 text-xs mb-4">{job.updated_at}</p>
					<h3 className="font-bold">{job.title}</h3>
					<p className="text-s mt-1">{job.company}</p>
					<p className="text-gray-500 text-xs mt-2">{job.location}</p>
				</li>
			))}
		</ul>
	);
};

export default JobsList;
