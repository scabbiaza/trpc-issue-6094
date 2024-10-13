import { createHTTPServer } from "@trpc/server/adapters/standalone"
import { publicProcedure, router } from "./trpc.js"

const appRouter = router({
  ping: publicProcedure.query(() => "pong"),
})

// Export type router type signature, this is used by the client.
export type AppRouter = typeof appRouter

const server = createHTTPServer({
  router: appRouter,
})

server.listen(3000)
