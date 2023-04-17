import { WageFundData } from "../models/WageFundData";
import { GetComplexMoney } from "./GetComplexMoney";

export const WageFundFind = (commonInsuranceTaxCoefficient: number) => {
    
    let data: WageFundData = {middleSalary: {mainCoin: 30000, subCoin: 0}, quatityEmployee: 4}

    return GetComplexMoney(data.middleSalary) * data.quatityEmployee * 12 
    * commonInsuranceTaxCoefficient;
}