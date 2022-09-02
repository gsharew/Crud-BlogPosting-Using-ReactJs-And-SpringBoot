import React from "react";
export default class PageNotFound extends React.Component
{
     constructor(props)
     {
         super(props)
     }

     render()
     {
         return(
              <div style={{backgroundColor : 'red'}}>
                    <h1 style={{textAlign : 'center'}}>OOPs Page Not Found !!</h1>
              </div>
         )
     }
}