export const save = (state: object) => {
  localStorage.setItem("our-state", JSON.stringify(state))
}


export const restore = () => {
  return localStorage.getItem("our-state")
}