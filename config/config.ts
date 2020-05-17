const env = Deno.env;
export const APP_HOST = env.get("APP_HOST") || "127.0.0.1";
export const APP_PORT = Number(env.get("APP_PORT")) || 3000;