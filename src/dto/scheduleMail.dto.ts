import { Expose } from "class-transformer";
import { IsEmail, IsIn, IsNotEmpty } from "class-validator";

export class ScheduleMailDTO {
	@Expose()
	@IsNotEmpty()
	@IsEmail()
	email!: string;

	@Expose()
	@IsNotEmpty()
	@IsIn(["regular", "instant"])
	schedule!: "regular" | "instant";
}
