import * as repository from "../repositories/usersRepositories"


export const getAll = async (filters: {name:string, city:string, age:string}) => {
    const data = await repository.findAll(filters)
    return data
}