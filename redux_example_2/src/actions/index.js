export const increment = (numberToIncrement = 1) => {
  return {
    type: 'INCREMENT',
    payload: numberToIncrement
  }
}

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}
