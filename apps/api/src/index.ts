import { bootstrap } from "./bootstrap"
import { config } from "./config"
import express from "express"
import env from "./env"

const app = express()

bootstrap(app).then(({ app }) => {
  app.listen(config.api.port, config.api.host, () =>
    console.info(
      `API server listening on http://${config.api.host}:${
        config.api.port
      } in ${env.isDevelopment ? "development" : "production"} mode`,
    ),
  )
})
