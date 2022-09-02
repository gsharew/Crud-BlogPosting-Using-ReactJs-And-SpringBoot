import { render } from "@testing-library/react";
import React from "react";
const MakeBlogUi = ({blog, margin}) =>  
{

    return(
     <div style={{width : '500px', height : '200px', position : 'absolute', marginTop : '50px', left : 0, right : 0, marginLeft : 'auto', marginRight : 'auto'}}>
                <h1 style={{textAlign : 'center', color : 'white', backgroundColor : 'red'}}>Blog List</h1>
                <div style={{overflowX : 'scroll', padding : '50px', backgroundColor : 'red', color : 'white', marginTop : margin}}>
                    <label>FullName : <span style={{fontWeight: 'bold'}}>{blog.fullName}</span></label>
                    <br></br>
                    <label>UserName : <span style={{fontWeight: 'bold'}}>{blog.username}</span></label>
                    <br></br>
                    <label>Password : <span style={{fontWeight: 'bold'}}>{blog.password}</span></label>
                    <br></br>
                    <label>BlogType : <span style={{fontWeight: 'bold'}}>{blog.blogType}</span></label>
                    <br></br>
                    <label>BlogContent : <span style={{fontWeight: 'bold'}}>{blog.blogContent}</span></label>
                </div>
     </div>
  )  
}

export default MakeBlogUi;