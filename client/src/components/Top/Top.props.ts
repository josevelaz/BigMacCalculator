import { CountryData } from "../../app/app"

export interface TopProps {
  country?: CountryData | null
  changeAmmount: React.Dispatch<React.SetStateAction<number>>
  ammount?: number
}
