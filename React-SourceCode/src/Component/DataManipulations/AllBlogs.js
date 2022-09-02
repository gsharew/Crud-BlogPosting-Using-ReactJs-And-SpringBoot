import React, { useState } from "react";
import Header from "../WebContents/Header";
import { useEffect } from "react";
import MakeBlogUi from "./MakeBlogUi";
const AllBlogs = () =>
{
    const [data, setData] = useState([]);
    const [loadingInformation, setLoadingInformation] = useState("Loading your data....");
    useEffect( () =>{
        FetchTheBlogs();
    }, []);

        const FetchTheBlogs = () =>{
            fetch("http://127.0.0.1:5002/Blogs/getBlogs",{
                method: 'GET',
                headers:{
                   'Authorization' : 'Basic ' + btoa("Getachew" + ":" + "Sharew")
                }
               })
               .then(res =>{
                   if(res.status === 200)
                   {
                      return res.json();
                   }
       
                   else if(res.status === 403)
                   {
                       return "UnAuthorzed User";
                   }
       
                   else if(res.status === 401)
                   {
                         return "UnAuthenticated User";
                   }
                   
                   //this will check for any  errors
                   else
                   {
                        return "Error processing your data";
                   }
                })
                
                .then(rdata =>
                {      
                   setData(rdata);
                   setLoadingInformation("");
                //    console.log(rdata);   
                });
                setLoadingInformation("");
        }

         return(
                <div style={{width : '100%', height : '100vh', position : 'relative', overflow : 'auto'}}>
                    <Header/>       
                    <div style={{ marginTop : '100px', width : '100%'}}>
                            <div style={{textAlign : 'center', color : 'white'}}> {data && <h1>{data.length} blog</h1>}</div>
                    </div>
                     {
                            data.length > 0 ?  data.map((singleData, index) =>(
                                <MakeBlogUi blog = {singleData} key={index} margin={index * 170}/>
                            )) : <h1 style={{color : 'white', textAlign : 'center'}}>{loadingInformation}</h1>
                     }
                </div>
         )
}

export default AllBlogs;