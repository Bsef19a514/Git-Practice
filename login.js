

const login=(name,email,password)=>{
    if(name===''||name===null){
        console.log("name can't be empty");
        return;
    }if(email===''||email===null){
        console.log("email cant be empty");
        return;
    }if(password===''||password===null){
        console.log("password cant be empty");
        return;
    }
    
    if(name==="zain" && email==="zain@gmail.com" && password==="123"){
        console.log("login successful");
    }else{
        console.log("incorrect credentials");
    }
}

login("ali",null,"zain@gmail.com")