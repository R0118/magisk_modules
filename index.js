const express = require("express");
const app = express();
const port = 3000;
const modulesRouter = require("./route/modulesRouter");

app.use (express.json());
app.use(
    express.urlencoded({
             extended: true,
    })
);    
app.get("/", (req, res) => {
    res.json("L");
});
app.use("/modulesData", modulesRouter);

app.use((error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    console.error(error.message, error.stack);
    res.status(statusCode).json({ message: error.message });
    return;
});
app.listen(port, () => {
    console.log('Server listening at ' + port + ' $port.');
});