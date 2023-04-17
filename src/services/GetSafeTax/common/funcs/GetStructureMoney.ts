import { Money } from "../models/Money"

export const GetStructureMoney = (money: number) => {
    let _money: Money = {
        mainCoin: Math.trunc(money), 
        subCoin: Math.floor((money % 1) * Math.pow(10, 2))} 

    return _money
}