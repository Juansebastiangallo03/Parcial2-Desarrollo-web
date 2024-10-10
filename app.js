import API from './api.js';
import DOM from './dom.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Eliminar la carga automática de usuarios

    // Manejar el envío del formulario
    document.getElementById('user-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const jobTitle = document.getElementById('jobTitle').value;
        const photo = document.getElementById('photo').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const user = { firstName, lastName, jobTitle, photo, email, phone };

        try {
            // Crear nuevo usuario
            await API.createUser(user);
            DOM.showMessage('Usuario creado correctamente');

            // Recargar lista de usuarios
            const users = await API.fetchUsers();
            DOM.renderUsers(users);

            // Limpiar el formulario
            document.getElementById('user-form').reset();
        } catch (error) {
            DOM.showMessage('Error al guardar el usuario', true);
        }
    });

    // Manejar la consulta de usuarios al hacer clic en el botón "Consultar Usuarios"
    document.getElementById('fetch-users-btn').addEventListener('click', async () => {
        try {
            const users = await API.fetchUsers();
            DOM.renderUsers(users);
            DOM.showMessage('Usuarios cargados correctamente');
        } catch (error) {
            DOM.showMessage('Error al consultar los usuarios', true);
        }
    });
});
