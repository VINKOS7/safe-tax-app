import { useState } from "react"
import { SafeTax } from "../../../common/models/SafeTax"
import { TaxItemFormComponent } from "./TaxItemFormComponent"

export const TaxsItemFormComponent = () => {
    const [addingTaxs, setAddingTaxs] = useState(false)
    let [txtButton, setTxtButton] = useState('добавить')

    const ChangeAddingTaxs = () => {
        if(addingTaxs){
            setTxtButton('добавить')
            setAddingTaxs(false)
        } 
        else {
            setTxtButton('показать')
            setAddingTaxs(true)
        }
    }

    return (
        <div>
            { 
                addingTaxs &&
                <TaxItemFormComponent/>         
            }
            { 
                !addingTaxs &&
                <div>show</div>
            }
            <button color="red" onClick={ChangeAddingTaxs}>{txtButton}</button>
        </div>
    )
}