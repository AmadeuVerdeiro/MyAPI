import { newUser } from "../utils/fetchAPI";

export default function NewUserDiv() {
  function addUserData() {
    let name = document.getElementById("nameUser").value;
    let email = document.getElementById("emailUser").value;
    newUser(name, email);
  }

  return (
    <>
      <div className="formNew" id="formNew">
        <form>
          <div>
            <label>
              Name
              <input type="text" id="nameUser" />
              <br></br>
            </label>
          </div>
          <div>
            <label>
              Email
              <input type="text" id="emailUser" />
              <br></br>
            </label>
          </div>
          <div>
            <button id="btSend" className="btAdd" onClick={() => addUserData()}>
              ADD
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
