export default class DOM {
    static renderUsers(users) {
        const userList = document.getElementById('user-list');
        userList.innerHTML = ''; // Limpiar la lista

        if (users.length === 0) {
            const noUsersMessage = document.createElement('li');
            noUsersMessage.textContent = 'No hay usuarios disponibles.';
            userList.appendChild(noUsersMessage);
        } else {
            users.forEach(user => {
                const listItem = document.createElement('li');
                
                // Crear elementos para mostrar la información y la foto
                const userInfo = document.createElement('pre');
                const userPhoto = document.createElement('img');

                // Foto del usuario
                userPhoto.src = user.photo;
                userPhoto.alt = `Foto de ${user.firstName} ${user.lastName}`;
                userPhoto.style.width = '100px'; // Ajustar el tamaño de la imagen
                
                // Convertir el JSON a una cadena formateada con JSON.stringify
                const formattedJson = JSON.stringify(user, null, 2);

                userInfo.textContent = formattedJson;

                // Agregar los elementos al li
                listItem.appendChild(userPhoto);
                listItem.appendChild(userInfo);

                listItem.dataset.id = user.id;

                listItem.addEventListener('click', () => {
                    DOM.populateForm(user);
                });

                userList.appendChild(listItem);
            });
        }
    }

    static showMessage(message, isError = false) {
        const messageElement = document.getElementById('message');
        messageElement.textContent = message;
        messageElement.style.color = isError ? 'red' : 'green';
    }

    static populateForm(user) {
        document.getElementById('firstName').value = user.firstName;
        document.getElementById('lastName').value = user.lastName;
        document.getElementById('jobTitle').value = user.jobTitle;
        document.getElementById('photo').value = user.photo;
        document.getElementById('email').value = user.email;
        document.getElementById('phone').value = user.phone;
    }
}
