class Http {
    async get(url) {
        const respone = await fetch(url).then(data => data.json())
        return respone;

    }
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
            },
        }).then(data => data.json())
        return response;
    }

    async put(url, data) {
        const respone = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
            },
        }).then(data => data.json())
        return respone;
    }
    async delete(url) {
        const respone = await fetch(url, {
            method: "DELETE"
        }).then(data => data.json())
        return respone;
    }
}
export const http = new Http();