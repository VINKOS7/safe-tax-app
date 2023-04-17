import Popup from "reactjs-popup"
import { SafeTax } from "../../../common/models/SafeTax"
import { TaxItemComponent } from "./TaxItemComponent"

export const TaxItemFormComponent = () => {
    let tax : SafeTax;
    return (
        <form>
            <label> имя:
                <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
            <label> ндс:
                <input type="text" name="addPriceTaxSum" />
            </label>
            <label> чистая прибыль:
                <input type="text" name="cleanProfit" />
            </label>
            <label> коофцент подоходного налога:
                <input type="text" name="taxCoefficientOnProfit" />
            </label>
            <label> общий страховой коэффициент:
                <input type="text" name="commonInsuranceTaxCoefficient" />
            </label>
            <label> фонд зп:
                <input type="text" name="wageFundFind" />
            </label>
            <label> имущественный налог:
                <input type="text" name="possessionsTaxSum" />
            </label>
            <label> выручка:
                <input type="text" name="revenue" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
}