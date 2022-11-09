export interface ICategory {
    id: number;
    title: string;
    image?: string;
}

export interface ICreateCategory {
    title: string;
    image?: string;
}

export interface ICategoriesState {
    categories: ICategory[];
    categoryId: number;
}
