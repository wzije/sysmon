import type { NextFunction, Request, Response } from "express";
export declare const auth: (req: Request, res: Response, next: NextFunction) => void;
export declare const authAPI: (req: Request, res: Response, next: NextFunction) => Response<any, Record<string, any>> | undefined;
//# sourceMappingURL=auth.middleware.d.ts.map