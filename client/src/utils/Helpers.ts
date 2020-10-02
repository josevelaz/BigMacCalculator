export const helperFunctions = {
  calculateAmmount: (price: number | undefined, ammount: number | undefined) => {
    if (price && ammount) return ammount / price
    else return 0
  }
}
