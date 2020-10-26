import { TOGGLE_NAV_MENU } from "./navMenuTypes"
const initialState = {
  menuVisible: false,
}
const navMenuReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_MENU:
      return {
        ...state,
        menuVisible: !state.menuVisible,
      }

    default:
      return state
  }
}
export default navMenuReducer
