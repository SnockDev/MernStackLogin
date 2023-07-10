import app from "./app.js";
import { connectdb } from "./db.js";

connectdb()
app.listen(3000,()=>{
    console.log(`server running on http://localhost:${3000}`);
})

/*
{
  "username":"test11",
  "email":"test11@gmail.com",
  "password":"test11"
}

{
  "title":"simple task",
  "description":"simple task 1"
}
*/