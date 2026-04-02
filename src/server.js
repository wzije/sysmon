import app from './app.js';
import { ENV } from "./config/env.js";
const PORT = ENV.PORT;
app.listen(PORT, () => {
    console.log(`server is running on http://127.0.0.1:${PORT}`);
});
//# sourceMappingURL=server.js.map