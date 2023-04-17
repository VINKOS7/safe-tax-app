import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GraphDrawComponent } from './components/GraphDraw';
import { TaxsFormComponent } from './components/TaxsForm';
import { useWindowDimensions } from './services/common/funcs/useWindowDimensions';
import { dataTaxs, taxsData } from './source/data/taxs';
import { GetComplexMoney } from './services/GetSafeTax/common/funcs/GetComplexMoney';
import { WageFundFind } from './services/GetSafeTax/common/funcs/WageFundFind';
import { GetSafeTaxProps } from './components/common/models/commands/GetSafeTaxProps';
import { GetStructureMoney } from './services/GetSafeTax/common/funcs/GetStructureMoney';
import { Money } from './services/GetSafeTax/common/models/Money';
import { GetSafeTaxs } from './services/GetSafeTax/GetSafeTaxs';
import { SafeTaxs } from './components/common/models/SafeTaxs';

const Tax = (): GetSafeTaxProps => {
  let revenue: Money = {mainCoin: 2000000, subCoin: 0}
  let cleanProfit = GetStructureMoney(GetComplexMoney(revenue) * 1.22 * 1.30 * 1.18 * 1.5)//последний на развитие
  
  const tax : GetSafeTaxProps = {
    addPriceTaxSum: {mainCoin: GetComplexMoney(revenue) * 1.22, subCoin: 0}, 
    cleanProfit: cleanProfit,
    taxCoefficientOnProfit: 0.18,
    commonInsuranceTaxCoefficient: 0.30,
    wageFundFind: (commonInsuranceTaxCoefficient: number) => WageFundFind(commonInsuranceTaxCoefficient),
    possessionsTaxSum: {mainCoin: 700000 * 1.02, subCoin: 0}, 
    revenue: revenue
  }   

  return tax
}

const App = () => {
  const taxs = GetSafeTaxs(taxsData)
  const { height, width } = useWindowDimensions();
  const props = Tax()
  
  GetSafeTaxs(taxsData)
  
  return (
    <div className="App">
      <div className="back">
        <div className='graph'>
          <GraphDrawComponent 
          width={width / 1.1} 
          height={height / 2} 
          dataDraw={taxs} 
          margin={{ top: 2, right: 20, left: 10, bottom: 5 }}
          />
          <TaxsFormComponent
            addPriceTaxSum={props.addPriceTaxSum}
            cleanProfit={props.cleanProfit}
            taxCoefficientOnProfit={props.taxCoefficientOnProfit}
            commonInsuranceTaxCoefficient={props.commonInsuranceTaxCoefficient}
            wageFundFind={props.wageFundFind}
            possessionsTaxSum={props.possessionsTaxSum}
            revenue={props.revenue}
          />
        </div>
      </div>
    </div>
  );
}
export default App;