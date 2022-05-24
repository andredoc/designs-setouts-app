import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { IDesign } from '../models/design.model';
import { ISetout } from '../models/setouts.model';

class CadtService {
    api:AxiosInstance;

    constructor() {
        this.api = axios.create({ baseURL: 'http://localhost:5000' } );
    }

    //When calling .then(), we get the property data from httpResponse
    async getAllDesigns(): Promise<IDesign[]> {
        const {data} = await this.api.get('/designs');
        return data;
    }

    // When calling .then() , we get httpResponse
    // getAllSetouts(): Promise<AxiosResponse>{
    //     return this.api.get<ISetout[]>('/setouts')
    // }
    async getAllSetouts(): Promise<ISetout[]> {
        const { data } = await this.api.get('/setouts');
        return data;
    }

    getAllUsers() {
        return this.api.get('/users')
    }
}

const cadtsService = new CadtService()

export default cadtsService

