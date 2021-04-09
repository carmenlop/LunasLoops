const url = `http://localhost:3001/api`

class ClientModel {
    static all = () => {
        return fetch(`${url}/clients`).then(res => res.json())
    }

    static show = (clientId) => {
        return fetch(`${url}/clients/${clientId}`).then(res => res.json())
    }

    static create = (clientData) => {
        return fetch(`${url}/clients`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(clientData)
        }).then(res => res.json())
    }
}

export default ClientModel