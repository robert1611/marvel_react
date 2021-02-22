const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6ImQ3Mjc5ZDMwMGU3NjFjNDJhZTgwNTA5NzZiYjk0MzA1ZjhiMGUzNTMxNmY3ZDU3MSIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTIwIDA2OjQzOjA2LjMxNzY3MlwiIn0.dakafkB0Pm51IxjAvanyiaXgiTp28d8TjMSbk5ZtJ8I' // TODO: Add API Access Key

const heroku_token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJvd25lciI6IjliMjgzZjkzOTMzNWUyNTcyNTA4OTRlNGY2OGIyNTg5NGMxZWIzNDA3YWMyOTQ3ZiIsImFjY2Vzc190aW1lIjoiXCIyMDIxLTAyLTIyIDEzOjM1OjI2LjE1OTcyMFwiIn0.HWmvvF_n4zSzV1M2UIYNSa1H7qIsww5xdk0auODZ2As'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://marvel-rd.herokuapp.com/marvels`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },    
		delete: async (id:string) => {
        const response = await fetch(`https://marvel-rd.herokuapp.com/marvels/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            }
        });

        if(!response.ok){
            throw new Error('Failed to Delete data from server')
        }

        return await response.json()
    },
		update: async (id:string, data:any = {}) => {
        const response = await fetch(`https://marvel-rd.herokuapp.com/marvels/${id}`, {
            method: 'POST', // PUT also works here
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to update data from server')
        }

        return await response.json()
    },
		create: async (data:any = {}) => {
            const response = await fetch(`https://marvel-rd.herokuapp.com/marvels`,{
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${heroku_token}`
                },
                 body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create new data on server')
        }

        return await response.json()
    }
}
