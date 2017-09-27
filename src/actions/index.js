
export const addTodo = (data) =>{
    return{
    type: 'ADD_TODO',
    city: data.city,
    list: data.list
    }
  }
  export const createCoffie = (data) =>{
      return{
      type: 'ADD_Coffie',
      name:data.name,
      id:data.id,
      image:data.image,
      about:data.about,
      fan_count:data.fan_count
      }
    }
    export const resetRedux = () =>{
        return{
        type: 'RESET',
        }
      }
