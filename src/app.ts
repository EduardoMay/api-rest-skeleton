import cors from "cors";
import Express from "express";
import morgan from "morgan";

// Routes
import ExampleRoutes from "./routes/example";

const app = Express();

app.set("port", process.env.PORT || 3006);

app.use(cors());
app.use(morgan("dev"));
app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));

app.use("/api/v1/example", ExampleRoutes);

export default app;
