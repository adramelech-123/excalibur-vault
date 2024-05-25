import { cleanEnv } from "envalid";
import { port, str } from "envalid";

export default cleanEnv(process.env, {
  MONGO_CXN_STRING: str(),
  PORT: port(),
  SESSION_SECRET: str()
});