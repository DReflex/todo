
const stateInit = {
  city: {name:""},
  list: [{
    dt_txt: "",
    main:{
      temp:Number,
      humidity: Number
        },
      weather:[{description: ""}]
 }]
}
const todos = (state = stateInit, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
          city: action.city,
          list: action.list,
        }



      default:
      return state
  }

}

export default todos
