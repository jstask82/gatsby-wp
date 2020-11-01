import { CHANGE_BACK_TO_TOP_VISIBILITY } from "./scrollToTopTypes"
export const changeBackToTopVisibility = boolean => {
  return {
    type: CHANGE_BACK_TO_TOP_VISIBILITY,
    payload: boolean,
  }
}
