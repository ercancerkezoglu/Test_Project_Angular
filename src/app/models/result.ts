import { User } from "./User"

export interface Result {
    companyID: number
    companyName: string
    countryID:number
    countryName: string
    cityID:number
    cityName: string
    users: User[];
}