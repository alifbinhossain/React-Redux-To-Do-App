export function addToList(payload) {
  return {
    type: "ADD_TO_LIST",
    payload,
  };
}
export function removeFromList(payload) {
  return {
    type: "REMOVE_FROM_LIST",
    payload,
  };
}
export function addToTop(payload) {
  return {
    type: "ADD_TO_TOP",
    payload,
  };
}
