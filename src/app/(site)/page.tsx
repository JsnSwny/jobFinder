import getJobs from "@/actions/getJobs";
import JobsList from "../components/JobsList";
import Search from "../components/inputs/Search";

export default async function Page() {
	const jobs = await getJobs();
	return (
		<>
			<h1 className="font-bold text-3xl mb-4 mt-12">Find Jobs</h1>
			<Search placeholder="Search jobs..." />
			<JobsList jobs={jobs} />
		</>
	);
}
