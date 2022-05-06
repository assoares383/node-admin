import express from "express"
import cors from "cors";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"]
}));

routes(app);

app.listen(9000, () => {
  console.log('listening to port 9000');
})
