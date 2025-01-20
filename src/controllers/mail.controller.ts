import { Request, Response } from "express";
import { ScheduleMailDTO } from "../dto/scheduleMail.dto.js";

async function scheduleMail(
	req: Request<{}, {}, ScheduleMailDTO>,
	res: Response,
) {
	console.log(req.body);
	res.send("Mail scheduled");
}

export { scheduleMail };
