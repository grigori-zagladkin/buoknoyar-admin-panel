export interface IItemAttributeValue {
    id: number;
    itemId: number;
    value: string;
    attribute: string;
}

export interface IItem {
    id: number;
    title: string;
    count: number;
    price: number;
    image: string;
    categoryId: number;
    properties: IItemAttributeValue[];
}

export interface IItemProperties {
    property: string;
    value: string;
}

export interface ICreateItem {
    title: string;
    count: number;
    image: string;
    price: number;
    description?: string;
    categoryId: number;
    properties: IItemProperties[];
}

export interface IItemState {
    createdItem: ICreateItem;
    items: IItem[];
    searchString: ISearch;
}

export interface IPropertyValue {
    id: number;
    property: string;
    value: string;
}

export interface ISearch {
    title: string;
    categoryId: number;
    orderBy: orderBy;
    limit: number;
    page: number;
}

export enum orderBy {
    asc = "ASC",
    desc = "DESC",
}

export interface ICategoryProperty {
    id: number;
    name: string;
}
