import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";
const appRouter = Router();
appRouter.use("/user", userRoutes); // domain/api/v1/user
appRouter.use("/chat", chatRoutes); // domain/api/v1/chats
// appRouter.use("/auth", authRouter);
// appRouter.use("/messages", messageRouter);
export default appRouter;
//# sourceMappingURL=index.js.map