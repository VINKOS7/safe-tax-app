import { Money } from "../models/Money"

export const GetComplexMoney = (money: Money) => {
    return money.mainCoin + (money.subCoin / 100)
}