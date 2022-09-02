import React from "react";
import '../Css/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";

class Header extends React.Component
{
    constructor(props)
    {
         super(props);
         const thisInstance = this;
         this.state = ({
            smallScreenListClassName : 'SmallScreenList',
            togglerIcon : faBars
         })


         window.addEventListener("resize", ()=>{
             const WindowWidth = window.innerWidth;
             if(WindowWidth >= 900)
             {
                 thisInstance.setState({smallScreenListClassName : 'SmallScreenList'});
                 console.log("value: " + WindowWidth);
             }
         })
    }

    toogleList = (event) =>
    {
        if(this.state.smallScreenListClassName === "SmallScreenList")
        {
            this.setState({smallScreenListClassName : 'toggledSmallScreenList'});
            this.setState({togglerIcon : faTimes});
        }

        else
        {
            this.setState({smallScreenListClassName : 'SmallScreenList'});
            this.setState({togglerIcon : faBars});
        }

    }

    render()
    {
     return(
         <div className="GrandParent">
             <div className="HeaderParent">
                 <span className="logoName">Blog Posting</span>
                 <FontAwesomeIcon onClick={this.toogleList} className="toggler" icon={this.state.togglerIcon}></FontAwesomeIcon>
                 <ul className="LargeScreenList">
                    <Link style={{textDecoration : 'none'}} to="/"> <li>Post Blogs</li> </Link>
                    <Link style={{textDecoration : 'none'}} to="/delete"> <li>Delete Blogs</li> </Link>  
                    <Link style={{textDecoration : 'none'}} to="/update"> <li>Update Blogs</li> </Link>
                    <Link style={{textDecoration : 'none'}} to = "/AllBlogs"> <li>All Blogs</li> </Link> 
                    <Link style={{textDecoration : 'none'}} to="/ContactUs"> <li>Contact Me</li> </Link> 
                 </ul>

                 <br/>

                 <div>
                    <ul className={this.state.smallScreenListClassName}>
                        <Link style={{textDecoration : 'none'}} to="/"> <li>Post Blogs</li> </Link>
                        <Link style={{textDecoration : 'none'}} to="/delete"> <li>Delete Blogs</li> </Link>  
                        <Link style={{textDecoration : 'none'}} to="/update"> <li>Update Blogs</li> </Link>
                        <Link style={{textDecoration : 'none'}} to = "/AllBlogs"> <li>All Blogs</li> </Link> 
                        <Link style={{textDecoration : 'none'}} to="/ContactUs"> <li>Contact Me</li> </Link> 
                    </ul>
                 </div>

             </div>
         </div>
    );
}
}
export default Header;