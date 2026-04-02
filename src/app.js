import express from 'express';
import path from 'path';
import { fileURLToPath } from "url";
import router from './routes/system.routes.js';
import { auth } from './middlewares/auth.middleware.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
//auth access
app.use(auth);
//fe
app.use(express.static(path.join(__dirname, "../public")));
//api
app.use('/api/', router);
export default app;
//# sourceMappingURL=app.js.map