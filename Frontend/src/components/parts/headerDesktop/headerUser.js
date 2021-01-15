import React from "react";
import "./userArea.css";
import { Link } from 'react-router-dom';
function IfLogged(props, url) {
  const isLoggedIn = props.isLoggedIn;
  console.log(props.isLoggedIn)
  if (isLoggedIn !== -1) {
    return <Link to="/login"> Login </Link>;
  }else{
    return <Link onClick={loggedOut}> Logout </Link>;
  } 
}
function loggedOut() {
  //Cookies.remove("Play8.discordauth2")
  console.log("Logged out, sir")
}
export class Huser extends React.Component {
    
    state = { showing: false };
// document.cookie.indexOf('Play8.discordauth2=')
    render() {
        const { showing } = this.state;
        
        return (
            <div className="header_user_area">
                    <div onClick={() => this.setState({ showing: !showing })} className="userFavicon" style={{ backgroundImage: `url(${this.props.avatarUrl})` }} ></div>
                { showing 
                    ? <UserCard userName={this.props.userName} />
                    : null
                }   
                    <IfLogged isLoggedIn={document.cookie.indexOf('Play8.discordauth2=')} url={this.props.loginUrl} />
            </div>  
        )
    } 
}

 function UserCard({userName}) {
  return (
    <div className="usercard">
     {userName}
    </div>
  );
}
