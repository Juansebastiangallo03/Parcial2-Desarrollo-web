const BASE_URL = 'http://ec2-3-138-183-128.us-east-2.compute.amazonaws.com:4010/users';

export default class API {

    static async fetchUsers() {
        try {
            const response = await fetch(BASE_URL);
            if (!response.ok) {
                const errorData = await response.json(); 
                throw new Error(`Error al obtener los usuarios: ${errorData.message || response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error en fetchUsers: ", error.message);
            throw error; 
        }
    }

    static async createUser(user) {
        try {
            const response = await fetch(BASE_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error al crear el usuario: ${errorData.message || response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error en createUser: ", error.message);
            throw error;
        }
    }

    static async updateUser(id, user) {
        try {
            const response = await fetch(`${BASE_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(user)
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Error al modificar el usuario: ${errorData.message || response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error("Error en updateUser: ", error.message);
            throw error;
        }
    }
}

