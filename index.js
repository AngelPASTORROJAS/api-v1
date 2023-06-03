import express from "express";
const app = express();

app.get('/employees', (req,res) => res.send("get empleados"))
app.post('/employees', (req,res) => res.send("add empleados"))
app.put('/employees', (req,res) => res.send("update empleados"))
app.delete('/employees', (req,res) => res.send("delete empleados"))

app.listen(3000);
console.log("server running in port 3000");
