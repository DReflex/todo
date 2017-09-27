
const stateInit = [{
  name:String,
  id:Number,
  image:String,
  about:String,
  fan_count:Number
}]
const coffieZenica = (state = stateInit, action) => {
  switch (action.type) {
    case 'ADD_Coffie':
      return [
        ...state,
        {
        name:action.name,
        id:action.id,
        image:action.image,
        about:action.about,
        fan_count:action.fan_count
        }
      ]
      case 'RESET':
      return state =[]

      default:
      return state
  }

}

export default coffieZenica
