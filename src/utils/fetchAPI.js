export async function getContacts(){
        const data = await fetch('https://doublebackend.onrender.com/contatos', {
            method: 'GET'
        });
        const json = await data.json();

        return json
    }

export async function deleteContact(id, name){
    const data = await fetch(`https://doublebackend.onrender.com/contatos/delete/${id}`, {
        method: 'DELETE'
    });
    const json = await data.json();

    alert(`The user ${name} was deleted.`);

    return window.location.reload();
}

export async function newUser(name, email){
    const endpoint = "https://doublebackend.onrender.com/contatos/post";
    const data = {
      name: name,
      email: email
    };
    
    fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Response data:", data);
      })
      .catch(error => {
        console.error("Error:", error);
      });
}