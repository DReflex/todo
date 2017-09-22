
export const addTodo = (data) =>{
    return{
    type: 'ADD_TODO',
    city: data.city,
    list: data.list
    }
  }
