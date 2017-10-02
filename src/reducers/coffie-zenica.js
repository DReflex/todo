
const stateInit = [{
  name:String,
  id:Number,
  image:String,
  about:String,
  fan_count:Number,
  location:String,
  comments: [""],
  events: Boolean,
  show_comments: Boolean
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
        fan_count:action.fan_count,
        location: action.location,
        comments: action.comments,
        events: action.events,
        show_comments: action.show_comments
        }
      ]
      case 'RESET':
      return state =[]

      case 'SHOW_COMMENTS':
       return state.map(data =>(data.id === action.id)
     ?{...data, show_comments: !data.show_comments}
     :data
    )

      default:
      return state
  }

}

export default coffieZenica
