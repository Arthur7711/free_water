import { Request, Response, NextFunction } from "express";

export default function (
    req: Request,
    res: Response,
    next: NextFunction
): void {
    console.log(req.header("Authorization"));

    try {
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
}