import prisma from "@/lib/prisma";

const getJobs = async () => {
	try {
		const messages = await prisma.job.findMany({
			take: 5,
		});

		return messages;
	} catch (error: any) {
		return [];
	}
};

export default getJobs;
