import type { Request, Response } from "express";
import { getSystemData } from "../services/system.service.js";

export const getSystemInfo = async (req: Request, res: Response) => {
    const data = await getSystemData()

    res.json(data)
}