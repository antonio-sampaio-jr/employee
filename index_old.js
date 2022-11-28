import { createServer } from 'http'; 
const server = createServer((request,response)=>{
    console.log("Hello World");
    response.end();
});
server.listen(8080,()=>console.log("server listining on 8080"));

