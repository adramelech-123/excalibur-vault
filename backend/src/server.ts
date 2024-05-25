import app from "./app"
import env from "./utils/validateEnv"
import mongoose from "mongoose";

const port = env.PORT

mongoose.connect(env.MONGO_CXN_STRING).then(() => {
    console.log('Connected to database! 🖥️')
    app.listen(port, () => {
      console.log(`Server is running on port: ${port}! 🎲`);
    });
}).catch(console.error)