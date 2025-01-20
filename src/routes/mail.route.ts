import { Router } from "express";

import { scheduleMail } from "../controllers/mail.controller.js";
import { validateDTO } from "../middlewares/validateDTO.js";
import { ScheduleMailDTO } from "../dto/scheduleMail.dto.js";
import { upload } from "../middlewares/handleFileUpload.js";

const mailRouter = Router();

mailRouter.post(
	"/schedule-mail",
	upload.single("resume"),
	(req, res, next) => {
		console.log(req.file);
		next();
	},
	validateDTO(ScheduleMailDTO),
	scheduleMail,
);

export default mailRouter;
