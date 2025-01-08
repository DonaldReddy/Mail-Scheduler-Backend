// middleware/validate.ts
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export function validateDTO(dtoClass: any) {
	return async (req: Request, res: Response, next: NextFunction) => {
		const dtoInstance = plainToInstance(dtoClass, req.body);
		const errors = await validate(dtoInstance);

		if (errors.length > 0) {
			res.status(400).json({
				message: `${dtoClass.name} Validation failed`,
				errors: errors.map((error) => ({
					property: error.property,
					constraints: error.constraints,
				})),
			});
		} else {
			next();
		}
	};
}
