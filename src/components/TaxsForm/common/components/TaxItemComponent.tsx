import Popup from "reactjs-popup"
import { GetSafeTaxProps } from "../../../common/models/commands/GetSafeTaxProps"

export const TaxItemComponent = (tax: GetSafeTaxProps) => {
    return (       
        <Popup trigger={<button> button</button>}> 
            {tax.revenue.mainCoin}. 
            {tax.revenue.subCoin}  
        </Popup>
    )
}