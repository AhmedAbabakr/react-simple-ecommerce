import React, { useContext, useState } from "react";
import {AuthContext} from "../Context/Auth";

export function Login(){
    const authContext = useContext(AuthContext);
    const [email,setEmail] = useState('');
   const [password,setPassword] = useState('');
    function login(e)
    {
      
        e.preventDefault();
        console.log([email,password]);
        if(password =="123")
        {
            const token = "abc";
            localStorage.setItem("token",token);
            localStorage.setItem("email",email);
            authContext.setAuth({"email":email,"token":token})
        }else{
            alert("Wrong email or password")
        }
    }
    return(
        <form >
            <br></br>
              <div className="row">
                <div className="col-sm-6">
                    <input className="form-control" type="email" name="email" placeholder="Enter Email" value={email} onChange={e => setEmail( e.target.value)} />
                </div>
                <div className="col-sm-6">
                    <input className="form-control" type="password" name="password" placeholder="Enter Password" value={password} onChange={e => setPassword( e.target.value)}/>
                </div>
              </div>
            
            <br></br>
            <input type="submit" className="btn btn-primary btn-sm" value="Submit" onClick={login}/>
        </form>
    )
}