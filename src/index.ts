import app from "./app";

app.listen(app.get("port"), () => {
  console.log(`Connected to port: ${app.get("port")}`);
});
