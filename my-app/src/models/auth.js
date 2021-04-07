const URL = 'http://localhost:3001/api'

class AuthModel {
    static register = (data) => {
        return fetch(`${URL}/auth/register`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }

    static login = (data) => {
        return fetch(`${URL}/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((response) => {
            return response.json()
        })
    }

    static verify = () => {
        return fetch(`${URL}/auth/profile`, {
            headers: { authorization: `Bearer ${ localStorage.uid }`}
        }).then((response) => {
            return response.json()
        })
    }
}

export default AuthModel