export interface IService {
    id: number;
    title: string;
    description: string;
    image: string;
}

export interface ICreateService {
    title: string;
    description: string;
    image: string;
}

export interface IServicesState {
    services: IService[];
}
