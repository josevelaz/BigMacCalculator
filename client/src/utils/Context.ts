import { Context, createContext } from "react"

export const BigMacContext: Context<{
  bigMacs: number
  changeBigMacs: React.Dispatch<React.SetStateAction<number>>
}> = createContext({
  bigMacs: 1,
  changeBigMacs: (q) => {}
})
