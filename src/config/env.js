import "dotenv/config";
export const ENV = {
    APP_NAME: process.env.APP_NAME ?? "App",
    PORT: process.env.PORT ?? 3001,
    AUTH: {
        USER: process.env.AUTH_USER ?? "user",
        PASSWORD: process.env.AUTH_PASSWORD ?? "user",
    },
    RATE_LIMIT_MAX: Number(process.env.RATE_LIMIT_MAX) ?? 20,
};
//# sourceMappingURL=env.js.map