import { UPADATE_SCROLL_INDICATOR } from "./scrollIndicatorTypes"
export const updateScrollIndicator = size => {
  return {
    type: UPADATE_SCROLL_INDICATOR,
    payload: size,
  }
}
