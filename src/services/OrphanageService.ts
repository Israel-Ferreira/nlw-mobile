import axios from 'axios'


export default class OrphanageService {
    private httpClient = axios.create({ baseURL: "http://192.168.15.6:3333" })

    async getAll() {
        const { data } = await this.httpClient.get('orphanages')
        return data 
    }
}


