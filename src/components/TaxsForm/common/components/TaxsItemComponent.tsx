import Popup from "reactjs-popup"
import { SafeTax } from "../../../common/models/SafeTax"
import { TaxItemComponent } from "./TaxItemComponent"

export const TaxsItemComponent = (taxs: SafeTax[]) => {
    taxs.map((tax) => {
        return (
            <TaxItemComponent 
                addPriceTaxSum={tax.addPriceTaxSum}
                cleanProfit={tax.cleanProfit}
                taxCoefficientOnProfit={tax.taxCoefficientOnProfit}
                commonInsuranceTaxCoefficient={tax.commonInsuranceTaxCoefficient}
                wageFundFind={tax.wageFundFind}
                possessionsTaxSum={tax.possessionsTaxSum}
                revenue={tax.revenue}
            />
        )
    })
}