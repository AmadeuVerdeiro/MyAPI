import { deleteContact, getContacts } from "../utils/fetchAPI";

export default async function dataApiDiv() {
  const data = await getContacts();

  if (data.contatos.length === 0) {
    const contactsAPI = document.getElementById("contactsAPI");
    const divError = document.createElement("div");
    const mensage = document.createElement("p");

    mensage.innerHTML = "Sorry... no contacts to list!";

    divError.appendChild(mensage);
    contactsAPI.appendChild(divError);
  } else {
    data.contatos.map((contact) => {
      const userId = contact.id;
      const userName = contact.name;

      const contactsAPI = document.getElementById("contactsAPI");

      const div = document.createElement("div");
      const div2 = document.createElement("div2");
      const name = document.createElement("p");
      const email = document.createElement("p");
      const button = document.createElement("button");

      name.innerHTML = "<b>Name: </b>" + contact.name;
      email.innerHTML = "<b>Email: </b>" + contact.email;
      button.innerHTML = "<img src='https://api.iconify.design/material-symbols:delete-outline.svg' />";
      button.classList = "deleteBt";
      button.addEventListener(
        "click",
        () => deleteContact(userId, userName),
        false
      );

      div.className = "div2";  

      div.appendChild(name);
      div.appendChild(email);
      div.appendChild(button);
      

      contactsAPI.appendChild(div);
    });
  }
}
