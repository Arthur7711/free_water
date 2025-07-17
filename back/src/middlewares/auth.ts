import { error } from "console";
import { Request, Response, NextFunction } from "express";
import { errorMessages } from "../constants/errorMessages";

export default function (
    req: Request,
    res: Response,
    next: NextFunction
): void {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (token === process.env.TOKEN) {
        next();
    } else {
        res.status(401).json({ message: errorMessages.invalidToken });
    }
}