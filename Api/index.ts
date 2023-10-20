import Express from "express";
const app = Express();

app.use(Express.json({ limit: '5mb' }));

// Routes
import { router as AuthRouter} from './Routes/Product';
app.use("/auth", AuthRouter);

// FIXME: hardcoded port
app.listen(4000, ()=>{
    console.log("[product-ms] => Listening on port 4001");
});

export default app;