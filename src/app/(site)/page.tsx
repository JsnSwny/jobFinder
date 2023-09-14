import getJobs from "@/actions/getJobs";
import JobsList from "../components/JobsList";

export default async function Page() {
	const jobs = await getJobs();
	return (
		<>
			<h1 className="font-bold text-3xl">Find Jobs</h1>
			<JobsList jobs={jobs} />
		</>
	);
}
