import { Router } from "express";
import { getSystemInfo } from "../controllers/system.controller.js";
const router = Router();
router.use("/", getSystemInfo);
export default router;
//# sourceMappingURL=system.routes.js.map