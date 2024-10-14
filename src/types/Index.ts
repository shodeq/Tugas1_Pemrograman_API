export type users = {
    name: string;
    city: string;
    age: string;
}


export type userQueryResponse = {
    data: Array<users> | null;
}