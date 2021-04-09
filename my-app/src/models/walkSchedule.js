const url = `http://localhost:3001/api`

class WalkScheduleModel {
    static all = () => {
        return fetch(`${url}/walk-schedule`).then(res => res.json())
    }
    
    static create = (walkScheduleData) => {
        return fetch(`${url}/walk-schedule/new`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(walkScheduleData)
        }).then(res => res.json())
    }
    
    static show = (walkScheduleId) => {
        return fetch(`${url}/walk-schedule/${walkScheduleId}`).then(res => res.json())
    }

}

export default WalkScheduleModel