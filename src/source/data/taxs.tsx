import { useState } from "react";
import { SafeTaxs } from "../../components/common/models/SafeTaxs";
import { DataDraw } from "../../components/GraphDraw/common/models/DataDraw";
import { GetComplexMoney } from "../../services/GetSafeTax/common/funcs/GetComplexMoney";
import { GetStructureMoney } from "../../services/GetSafeTax/common/funcs/GetStructureMoney";
import { WageFundFind } from "../../services/GetSafeTax/common/funcs/WageFundFind";

export let taxsData : SafeTaxs[]

/*
const _possessionsTaxSum = 0.02
const _taxCoefficientOnProfit = 0.18
const _commonInsuranceTaxCoefficient = 0.30
const _addPriceTax = 0.22
const _revenue = 20000000
const _sumTaxs = _addPriceTax + _commonInsuranceTaxCoefficient + _taxCoefficientOnProfit
*/

let _revenue = 20000000
const _possessionsTaxSum = 0.02
const _taxCoefficientOnProfit = 0.18
const _commonInsuranceTaxCoefficient = 0.30
const _addPriceTax = 0.22
//export let _revenue = global.g_revenue
//_revenue = 20000000
const _sumTaxs = _addPriceTax + _commonInsuranceTaxCoefficient + _taxCoefficientOnProfit

 taxsData = [   
    {
        name: 'revenue',
        data: [
            {       
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.05, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.05, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.05, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.08, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.08, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit:_taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.08, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.1, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.1, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.1, subCoin: 0}
            }
        ]
    },
    {
        name: 'not tax expenses',
        data: [
            {       
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.15)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.12)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.1)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            }
        ]
    },
    {
        name: 'revenue + not tax expenses',
        data: [
            {       
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue, subCoin: 0}) * (_sumTaxs + 0.2)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.025, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.025, subCoin: 0}) * (_sumTaxs + 0.175)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.025, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.04, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.04, subCoin: 0}) * (_sumTaxs + 0.16)),
                taxCoefficientOnProfit:_taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.04, subCoin: 0}
            },
            {
                addPriceTaxSum: {mainCoin: GetComplexMoney({mainCoin: _revenue * 1.05, subCoin: 0}) * _addPriceTax, subCoin: 0}, 
                cleanProfit: GetStructureMoney(GetComplexMoney({mainCoin: _revenue * 1.05, subCoin: 0}) * (_sumTaxs + 0.15)),
                taxCoefficientOnProfit: _taxCoefficientOnProfit,
                commonInsuranceTaxCoefficient: _commonInsuranceTaxCoefficient,
                wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
                possessionsTaxSum: {mainCoin: _revenue / 2 * _possessionsTaxSum, subCoin: 0}, 
                revenue: {mainCoin: _revenue * 1.05, subCoin: 0}
            }
        ]
    }
]


let taxsDatas: [SafeTaxs[]] = [[]]

taxsDatas.push(taxsData)

for(let i = 1; i < 5; i ++){

}

const outerdata = [
    { stage: '1', value: 10, value2: 20 },
    { stage: '2', value: 100, value2: 20 },
    { stage: '3', value: 20, value2: 30 },
    { stage: '4', value: 30, value2: 50 },
    { stage: '5', value: 90, value2: 110 }
];

export const dataTaxs: DataDraw = {
    data: outerdata,
    dataKeys: ["value", "value2"]
}
