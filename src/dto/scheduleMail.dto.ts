import { IsEmail, IsIn, IsNotEmpty } from "class-validator";

export class ScheduleMailDTO {
	@IsNotEmpty()
	@IsEmail()
	email!: string;

	@IsNotEmpty()
	@IsIn(["regular", "instant"])
	schedule!: "regular" | "instant";
}
