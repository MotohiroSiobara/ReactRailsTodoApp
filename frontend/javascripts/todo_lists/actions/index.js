export const changeChecked = (index, checked) => {
  if(checked) {
    return {
      type: "UNCHECK",
      index: index
    }
  }
  return {
    type: "CHECK",
    index: index
  }
}
