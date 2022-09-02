import React from "react";
import '../Css/Update.css'
import Header from "../WebContents/Header";
import Footer from "../WebContents/Footer";
export default class UpdateBlogs extends React.Component
{
     constructor(props)
     {
         super(props)
         this.state = {
            username: 0,
            password : '',
            blogtype : '',
            blogvalue : '' 
        }
     }
 
       handleClick = (event) =>
       {
            //now time to prevent from submmiting the form
            event.preventDefault();

            const ContactEntityRepresenter = JSON.stringify({
            fullName : "annonimous user",
            username : this.state.username,
            password : this.state.password,
            blogType : this.state.blogtype,
            blogContent : this.state.blogvalue 
       });

       fetch("http://localhost:5002/Blogs/updateBlog",{
         method : 'PUT',  
         headers : {
             'Accept' : 'application/json, text/plain, */*',
             'Content-Type' : 'application/json',
             'Authorization' : 'Basic ' + btoa("Getachew" + ":" + "Sharew")
         },
         body : ContactEntityRepresenter
         })

         .then(responseData => {    
             return responseData.text();
         })

         .then(filteredResponse =>{
            alert(filteredResponse);
         })

     }

     changeTextAreaValue = (event) =>
     {
          this.setState({blogvalue : event.target.value});
     }

     changeBlogTypeValue = (event) =>
     {
         this.setState({ blogtype : event.target.value });
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
             <div className="update">
                  <Header/>
                    <div className="form_parent">
                    <center><img src="user.png" style={{width : '100px', height : '100px', borderRadius : '50%'}}></img></center>
                    <h1 style={{textAlign:'center', marginTop : '20px'}}>Update a Blog</h1>
                        <form>
                            <span>Existing UserName   </span>
                            <input value={this.state.username} onChange={this.changeUsernameValue} placeholder="Username" type="number"></input>
                            <span>Existing Password</span>
                            <input  value={this.state.password} onChange={this.changePasswordValue} placeholder="Password" type="text"></input>
                            <span>New Blog Type</span>
                            <input value={this.state.blogtype} onChange={this.changeBlogTypeValue} placeholder="Blog Type" type="text"></input>
                            <span>New Blog Value</span>
                            <textarea onChange={this.changeTextAreaValue} value={this.state.blogvalue} placeholder="Blog Content"></textarea>
                            <input onClick={this.handleClick} type="submit" value="Submit"></input>
                        </form>
                    </div>
             </div>
        )
     }
}