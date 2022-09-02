import React from "react";
import '../Css/Delete.css'
import Footer from "../WebContents/Footer";
import Header from "../WebContents/Header";
export default class ContactUs extends React.Component
{
     constructor(props)
     {
         super(props)
         this.state = {
            username: '',
            password : '',
            email : '',
            comment : '' 
        }
     }

     handleClick = (event) =>
     {
          //prevent the server redirection 
          event.preventDefault();

          const jsonData = JSON.stringify({
          username : this.state.username,
          password : this.state.password,
          email : this.state.email,
          comment : this.state.comment
         });
       if(this.state.username.lenth != 0 && this.state.password.length != 0)
       {
            fetch("http://localhost:5002/Contacts/addContact",{
            method : 'POST',  
            headers : {
                'Accept' : 'application/json, text/plain, */*',
                'Content-Type' : 'application/json',
                'Authorization' : 'Basic ' + btoa("Getachew" + ":" + "Sharew")
            },
            body : jsonData
            })
            .then(response => response.text())
            .then(response => alert(response));
        }
        else{
             alert("username or password is empty");
        }
     }


     changeTextAreaValue = (event) =>
     {
          this.setState({comment : event.target.value});
     }

     changeEmailValue = (event) =>
     {
         this.setState({ email : event.target.value });
     }

     changePasswordValue = (event) => 
     {
        this.setState({ password : event.target.value});
     }

     changeUsernameValue =  (event) =>
     {
        this.setState({username : event.target.value});
     }

     render()
     {
        return(
             <div className="delete">
                  <Header/>
                       <div className="form_parent">
                       <center><img src="user.png" style={{width : '100px', height : '100px', borderRadius : '50%'}}></img></center>
                           <h1 style={{textAlign:'center', marginTop : '20px'}}>Contact Me</h1>
                            <form>
                                <span>UserName</span>
                                <input value={this.state.username} onChange={this.changeUsernameValue} placeholder="Username" type="number"></input>
                                <span>Password</span>
                                <input  value={this.state.password} onChange={this.changePasswordValue} placeholder="Password" type="text"></input>
                                <span>Email</span>
                                <input value={this.state.email} onChange={this.changeEmailValue} placeholder="Email" type="text"></input>
                                <span>Comment</span>
                                <textarea onChange={this.changeTextAreaValue} value={this.state.blogvalue} placeholder="Comment me"></textarea>
                                <input onClick={this.handleClick} type="submit" value="Submit"></input>
                            </form>
                        </div>
             </div>
        )
     }
}