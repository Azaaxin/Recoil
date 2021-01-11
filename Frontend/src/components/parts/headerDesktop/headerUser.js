import React from "react";
import "./userArea.css";
export class Huser extends React.Component {

    state = { showing: false };

    render() {
        const { showing } = this.state;
        return (
            <div className="header_user_area">
                  
                    <div onClick={() => this.setState({ showing: !showing })} className="userFavicon" style={{ backgroundImage: `url(${this.props.avatarUrl})` }} ></div>
                  
                { showing 
                    ? <UserCard userName={this.props.userName} />
                    : null
                }
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