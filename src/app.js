import express from "express";
import morgan from "morgan";

const PORT = 7000;

const app = express();
app.use(morgan(`dav`));

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START!`);
});
