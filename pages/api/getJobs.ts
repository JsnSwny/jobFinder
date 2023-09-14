import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../src/lib/prisma";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	try {
		const data = await prisma.job.findMany({
			skip: 3,
			take: 4,
		});
		return res.status(200).json(data);
	} catch (error) {
		console.log(error);
		res.status(403).json({ err: "Error has occured while fetching posts" });
	}
}
