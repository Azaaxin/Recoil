import React from "react";
import axios from 'axios';
import { BrowserRouter, Route } from 'react-router-dom';
import "./styles.css";
import SidePanel from "./components/parts/sidePanel/sidePanel";
import Header from "./components/parts/headerDesktop/header";
import Rw from "./components/parts/requestWall/rw";
import Login from "./components/login/login.js"
export default function App() {

  let [responseData, setResponseData] = React.useState('');
    const fetchData = React.useCallback(() => {
      axios({ 
        "method": "GET",
        "url": "http://localhost:3000/dashboard",
      })
      .then((response) => {
        setResponseData(response.data)
        console.log(response)
        console.log(response.data.username)
      })
      .catch((error) => {
        console.log(error)
      })
    }, [])
    React.useEffect(() => { 
      fetchData()
    }, [fetchData])



  let avatar =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png";
    if(responseData !== undefined){avatar=responseData.avatar}
  return (
    <BrowserRouter>
      <div className="App" onLoad={fetchData}>
        <Header
          logo="□□□□□"
          links="Browse" hrefLinks="/" loginUrl="/login" // Wants to add object as input
          avatarUrl={avatar}
          userName={responseData.username}
        />
        <div className="bodyWrapper">
          <SidePanel titles={["my events", "box"]} eventNames={["my group", "overwatch", "league of legends"]}/>
          <Route path="/" exact render={() => <Rw input={["my events", "box", "my events", "my events", "box", "my events", "box", "my events", "box", "my events", "box", "my events", "box", "my events", "box"]}/>}/>
          <Route path="/login" exact render={() => <Login url="/auth" />}/> 
        </div>
      </div>
    </BrowserRouter>
  );
}