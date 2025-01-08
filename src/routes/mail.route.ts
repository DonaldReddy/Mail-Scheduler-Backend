import { Router } from "express";

import { scheduleMail } from "../controllers/mail.controller.js";
import { validateDTO } from "../middlewares/validateDTO.js";
import { ScheduleMailDTO } from "../dto/scheduleMail.dto.js";

const mailRouter = Router();

mailRouter.post("/schedule-mail", validateDTO(ScheduleMailDTO), scheduleMail);

export default mailRouter;
