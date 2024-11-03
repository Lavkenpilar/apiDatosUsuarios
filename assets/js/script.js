const usuariosSection = document.querySelector(".datos");
 const apiURL = "https://jsonplaceholder.typicode.com/users"

 async function getUsuarios () {
    const res = await fetch(apiURL);
    const usuarios = await res.json();
    return usuarios;
    }

    async function renderUsuarios () {
        const usuarios = await getUsuarios();
        let template = "";
        usuarios.forEach((usuario) => {
        template += `
        <div class="usuarios">
        <h3>${usuario.id}</h3>
        <p>${usuario.name}</p>
        <p>${usuario.email}</p>
        </div>
        `;
        });
        usuariosSection.innerHTML = template;
        }
        renderUsuarios()