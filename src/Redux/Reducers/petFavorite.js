const petFavorite = (state = 3, action)  => {
  console.log("action: ", action);
  switch (action.type) {
    
    case "PET_FAVORITE":
      return (state = state + " are favorite");    
    default:
      return state;
  }
}

export default petFavorite;