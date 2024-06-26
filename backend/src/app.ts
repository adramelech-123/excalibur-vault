import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import userRoutes from "./routes/user.routes"
import accountRoutes from "./routes/account.routes"
import morgan from "morgan"
import createHttpError, {isHttpError} from "http-errors";
import cors from "cors"
import session from "express-session"
import env from "./utils/validateEnv"
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";


const app = express();
app.use(morgan("dev"))

// Setup Express to accept json in the request body
app.use(express.json())

app.use(session({
  secret: env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000
  },
  rolling: true,
  store: MongoStore.create({
    mongoUrl: env.MONGO_CXN_STRING
  })
}))


app.use(cors());
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

// Routes
app.use("/api/users", userRoutes);
app.use("/api/accounts", requiresAuth, accountRoutes)


// Endpoint does not exist -> Forward to Main Error Handler
app.use((req, res, next) => {
  next(createHttpError(404, "Endpoint not found 🏜️"))
})

// Main Error Handler 
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  let errorMessage = "Unknown Error!";
  let statusCode = 500
  if (isHttpError(error)) {
    statusCode = error.statusCode
    errorMessage = error.message
  }
  res.status(statusCode).json({ error: errorMessage });
})


export default app