import { useState } from "react"
import ReactiveButton from "reactive-button"
import { Z_HUFFMAN_ONLY } from "zlib"
import { GetSafeTaxProps } from "../common/models/commands/GetSafeTaxProps"
import { TaxsItemComponent } from "./common/components/TaxsItemComponent"
import { TaxsItemFormComponent } from "./common/components/TaxsItemFormComponent"

import "./index.css"

export const TaxsFormComponent = (props: GetSafeTaxProps) => {
    const [addingTax, setTax] = useState(false)
    let [txtButton, setTxtButton] = useState('добавить')
    
    const changeAddingTax = () => {
        if(addingTax){
            setTax(false)
            setTxtButton('добавить')
        }
        else{
            setTax(true)
            setTxtButton('показать')
        }
    }

    return (
        <div>
            <div className="tax-form">
                <div className="tax-form-item">
                    {
                        !addingTax &&
                        <div>показ</div>
                    }
                    {
                        addingTax &&
                        <TaxsItemFormComponent/>
                    }
                </div>                         
            </div>
            <button color="green" onClick={changeAddingTax}>{txtButton}</button>
        </div>
    )
}