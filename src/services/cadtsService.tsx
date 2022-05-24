import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { IDesign } from '../models/design.model';
import { ISetout } from '../models/setouts.model';
import { IUser } from '../models/user.model'

const designId = 19;
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

    //When calling .then() , we get httpResponse
    getAllSetouts(): Promise<AxiosResponse>{
        return this.api.get<ISetout[]>('/setouts')
    }
 
    async getAllUsers(): Promise<IUser[]> {
        const { data } = await this.api.get('/users');
        return data;
    }

    async updateDesign(design:IDesign): Promise<any> {
        const {data} = await this.api.put(`/designs/${design.id}`, design);
        return data;
    }

    async updateSetout(setout: ISetout): Promise<any> {
        const { data } = await this.api.put(`/setouts/${setout.id}`, setout);
        return data;
    }
}

const cadtsService = new CadtService()

export default cadtsService

