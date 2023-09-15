import { useEffect } from "react";
import "./App.css";
import dataApiDiv from "./components/dataApiDiv";
import NewUserDiv from "./components/newUserDiv";
import { newUser } from "./utils/fetchAPI";

function App() {
  const btNewDivAction = document.getElementById("btNewDivAction");

    dataApiDiv();

  function addDivNew(){
    document.getElementById('formNew').classList.toggle("show");
  }

  return (
    <div className="App">
      <div className="top">
        <h1>API Contacts</h1>
        <button className="btNewDiv" onClick={()=> addDivNew()}>
          NEW CONTACT
        </button>
      </div>
      <div className="formNewUser">
        <NewUserDiv />
      </div>
        <div id="contactsAPI" className="card" />
    </div>
  );
}

export default App;
