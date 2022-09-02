import React from "react";
import '../Css/Delete.css'
import Header from "../WebContents/Header";
export default class UpdateBlogs extends React.Component
{
     constructor(props)
     {
         super(props)
         this.state = {
            username: 0,
            password : ''
        }
     }

     handleClick = (event) =>
     {
        //now time to prevent from submmiting the form
        event.preventDefault();
        const bodydata = JSON.stringify({username : this.state.username, password : this.state.password});
        fetch("http://localhost:5002/Blogs/deleteBlog", 
        {
         headers : {
            'Accept' : 'application/json, text/plain, */*',
            'Content-Type' : 'application/json',
            'Authorization' : 'Basic ' + btoa("Getachew" + ":" + "Sharew")
        },
          method : 'DELETE',
          body : bodydata
        })
        .then(res => {
            return res.text();
        })
        .then(data =>{
           alert(data);
        })
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
                           <h1 style={{textAlign:'center', marginTop : '20px'}}>Delete a Blog</h1>
                            <form>
                                <span>UserName</span>
                                <input value={this.state.username} onChange={this.changeUsernameValue} placeholder="Username" type="number"></input>
                                <span>Password</span>
                                <input  value={this.state.password} onChange={this.changePasswordValue} placeholder="Password" type="text"></input>
                                <input onClick={this.handleClick} type="submit" value="Submit"></input>
                            </form>
                        </div>
             </div>
        )
     }
}