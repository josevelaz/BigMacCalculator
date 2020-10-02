import { CountryData } from "../../app/app"

export interface BottomProps {
  randomCountry?: CountryData | null
  ammount?: number
  changeAmmount: React.Dispatch<React.SetStateAction<number>>
  country?: CountryData | null
}
