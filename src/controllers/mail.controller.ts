import { Request, Response } from "express";

async function scheduleMail(req: Request, res: Response) {
	// TODO: Implement mail scheduling
	console.log(req.body);

	res.send("Mail scheduled");
}

export { scheduleMail };
