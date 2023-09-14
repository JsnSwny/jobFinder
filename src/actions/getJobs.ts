import prisma from "@/lib/prisma";

const getJobs = async (pageNumber: number = 1, pageSize: number = 10) => {
	try {
		const messages = await prisma.job.findMany({
			skip: (pageNumber - 1) * pageSize,
			take: pageSize,
		});

		return messages;
	} catch (error: any) {
		return [];
	}
};

export default getJobs;
