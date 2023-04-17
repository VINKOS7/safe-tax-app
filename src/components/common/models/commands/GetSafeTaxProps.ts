import { WageFundFind } from "../../../../services/GetSafeTax/common/funcs/WageFundFind"
import { Money } from "../../../../services/GetSafeTax/common/models/Money"

export interface GetSafeTaxProps {
    addPriceTaxSum: Money, 
    cleanProfit: Money,
    taxCoefficientOnProfit: number,
    commonInsuranceTaxCoefficient: number
    wageFundFind: typeof WageFundFind,
    possessionsTaxSum: Money,
    revenue: Money
}