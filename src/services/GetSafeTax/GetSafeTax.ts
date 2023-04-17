import { GetSafeTaxProps } from "../../components/common/models/commands/GetSafeTaxProps"
import { GetComplexMoney } from "./common/funcs/GetComplexMoney"

export const GetSafeTax = (props: GetSafeTaxProps) => {
    return (GetComplexMoney(props.addPriceTaxSum)
            + (GetComplexMoney(props.cleanProfit) 
                    * props.taxCoefficientOnProfit 
                    / (1 - props.taxCoefficientOnProfit)) 
                + props.wageFundFind(props.commonInsuranceTaxCoefficient)
                + GetComplexMoney(props.possessionsTaxSum)) 
            / GetComplexMoney(props.revenue)
}

/*win(a()
    ,b(c()
      ,d()
      ,e()
    )
)*/