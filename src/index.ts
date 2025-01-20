import express from "express";
import mailRouter from "./routes/mail.route.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/mail", mailRouter);
app.listen(port, () => {
	console.log(`Server is runnings on http://localhost:${port}`);
});
