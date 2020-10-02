import { Context, createContext } from "react"

export const LocalCurrencyContext: Context<{
  ammount: number
  cashValue?: number | undefined
  changeAmmount: React.Dispatch<React.SetStateAction<number>>
}> = createContext({
  ammount: 1,
  changeAmmount: (a) => {}
})
