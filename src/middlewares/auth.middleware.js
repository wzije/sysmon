import { ENV } from "../config/env.js";
export const auth = (req, res, next) => {
    const appUser = ENV.AUTH.USER;
    const appPassword = ENV.AUTH.PASSWORD;
    const auth = { login: appUser, password: appPassword };
    const b64auth = (req.headers.authorization || '').split(' ')[1] || '';
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':');
    if (login && password && login === auth.login && password === auth.password) {
        return next();
    }
    res.set('WWW-Authenticate', 'Basic realm="401"');
    res.status(401).send('Authentication required.');
};
export const authAPI = (req, res, next) => {
    const user = req.headers["x-user"];
    const pass = req.headers["x-password"];
    if (user !== ENV.AUTH.USER || pass !== ENV.AUTH.PASSWORD) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};
//# sourceMappingURL=auth.middleware.js.map