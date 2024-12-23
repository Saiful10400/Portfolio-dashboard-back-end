import app from "./app";

function main(){
    try{
        app.listen(5000,()=>{
            console.log("Server is running at 5000 port.")
        })
    }catch(err){
        console.log(err)
    }
}

main()