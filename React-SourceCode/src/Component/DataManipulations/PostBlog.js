import React from "react";
import '../Css/PostBlog.css'
import Header from "../WebContents/Header";

export default class Form extends React.Component
{
     constructor(props)
     {
         super(props)
         this.state = {
            username: 0,
            password : '',
            fullname : '',
            blogtype : '',
            blogvalue : ''    
        }
     }

     handleClick = (event) =>
     {
        const jsonData = JSON.stringify({
          fullName : this.state.fullname,
          username : this.state.username,
          password : this.state.password,
          blogType : this.state.blogtype,
          blogContent : this.state.blogvalue 
        });

        //prevent the server redirection 
        event.preventDefault();

        if(this.state.username.length != 0 && this.state.password.length != 0)
        {
            fetch("http://localhost:5002/Blogs/addBlog",{
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

        else
        {
           alert("username or password is empty");
        }
     }

     changeTextAreaValue = (event) =>
     {
          this.setState({blogvalue : event.target.value});
     }

     changeBlogTypeValue = (event) =>
     {
         this.setState({ blogtype : event.target.value });
     }

     changeFullNameValue = (event) =>
     {
        this.setState({ fullname : event.target.value });
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
             <div className="form">
                  <Header></Header>
                    <div className="form_parent">
                    <center><img src="user.png" style={{width : '100px', height : '100px', borderRadius : '50%'}}></img></center>
                    <h1 style={{textAlign:'center', marginTop : '20px'}}>Post a Blog</h1>
                        <form>
                            <span>UserName</span>
                            <input value={this.state.username} onChange={this.changeUsernameValue} placeholder="Username" type="number"></input>
                            <span>Password</span>
                            <input  value={this.state.password} onChange={this.changePasswordValue} placeholder="Password" type="text"></input>
                            <span>Blog Type</span>
                            <input value={this.state.blogtype} onChange={this.changeBlogTypeValue} placeholder="Blog Type" type="text"></input>
                            <span>FullName</span>
                            <input value={this.state.fullname} onChange={this.changeFullNameValue} placeholder="FullName" type="text"></input>
                            <span>Blog Value</span>
                            <textarea onChange={this.changeTextAreaValue} value={this.state.blogvalue} placeholder="Blog Content"></textarea>
                            <input onClick={this.handleClick} type="submit" value="Submit"></input>
                        </form>
                    </div>
             </div>
        )
     }
}