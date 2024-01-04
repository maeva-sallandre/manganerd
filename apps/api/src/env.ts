import "dotenv/config"
import { cleanEnv, host, port, str } from "envalid"

export default cleanEnv(process.env, {
  NODE_ENV: str({
    default: "development",
    choices: ["development", "test", "staging", "production"],
  }),
  API_HOST: host({
    desc: "host name or IP address for API server",
    devDefault: "localhost",
  }),
  API_PORT: port({ desc: "Port for API server", default: 4000 }),
})
