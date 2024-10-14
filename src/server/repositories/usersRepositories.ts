import users from '../../../public/data/users.json'


export const findAll = async (filters:{name:string, city:string, age:number}) => {
    let filterData = users;

    if(filters.name){
        filterData = filterData.filter((user) => 
        user.name.toLowerCase().includes(filters.name.toLowerCase()))
    }

    if(filters.city){
        filterData = filterData.filter((user) => 
        user.city.toLowerCase().includes(filters.city.toLowerCase()))
    }

    if(filters.age){
        filterData = filterData.filter((user) => 
        user.age === filters.age)
    }



    return filterData
}

