import rateLimit from "express-rate-limit";
import { ENV } from "../config/env.js";

export const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 menit
    max: ENV.RATE_LIMIT_MAX, // max 100 request per IP
    standardHeaders: true, // kirim header rate limit
    legacyHeaders: false,
    message: {
        status: 429,
        message: "Terlalu banyak request, coba lagi nanti."
    }
});