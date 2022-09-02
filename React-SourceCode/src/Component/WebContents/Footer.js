import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';
import '../Css/Footer.css'
export default class Footer extends React.Component
{
     constructor(props)
     {
         super(props)
     }

     render()
     {
         return(
             <div className="FooterParent">
                   <footer className="footer">
                         <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon>
                         <label> blog.posts 2022</label>
                    </footer>
             </div>
         )
     }
}