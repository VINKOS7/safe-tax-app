import { GetSafeTaxProps } from "../../components/common/models/commands/GetSafeTaxProps"
import { SafeTax } from "../../components/common/models/SafeTax"
import { SafeTaxs } from "../../components/common/models/SafeTaxs"
import { GetComplexMoney } from "./common/funcs/GetComplexMoney"
import { GetSafeTax } from "./GetSafeTax"

interface Draws {
    data: any[]
    dataKeys: string[]
}

export const GetSafeTaxs = (data: SafeTaxs[]) => {
    let drawDatas: Draws = { data:[], dataKeys:[]}
    let names: string[] = []
    let taxs: number[] = []
    data.map((item) => {
        names.push(item.name)
    })

    data.map((item) => {
        item.data.map((i, idx) => { 
            taxs.push(GetSafeTax(i))
        })
    })
    
    drawDatas.dataKeys = names
   
    let q = 1
    data.map((item, index) => {      
        item.data.map((i, idx) => {      
            
            if(index + 1 === 1) drawDatas.data.push({['stage'] : idx + 1, [`${item.name}`] : GetSafeTax(i)})
            else drawDatas.data[idx][`${item.name}`] = GetSafeTax(i)   
            q++
        })
    })
    console.log(drawDatas)
    return drawDatas
}