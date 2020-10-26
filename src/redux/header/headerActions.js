import { CHANGE_HEADER_SIZE } from "./headerTypes"
export const changeHeaderSize = (paddingValue = 1) => {
  return {
    type: CHANGE_HEADER_SIZE,
    payload: paddingValue,
  }
}
