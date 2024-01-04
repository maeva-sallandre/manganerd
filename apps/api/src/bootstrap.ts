import express, { Application } from "express"
import compression from "compression"
import cors from "cors"

export async function bootstrap(
  app: Application,
): Promise<{ app: Application }> {
  app.use(compression())
  app.use(cors({ origin: true, credentials: true }))
  app.use(express.urlencoded({ extended: true }))

  app.use("/", (_request, response) => response.status(200).send("ok"))
  app.use("/health", (_request, response) => response.status(200).send("ok"))

  return { app }
}
