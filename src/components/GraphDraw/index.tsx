import { useState } from "react"
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, Tooltip, XAxis, YAxis } from "recharts"
import { Margin } from "recharts/types/util/types"
import { DataDraw } from "./common/models/DataDraw"
import "./index.css"

interface GraphDrawProps {
    width: number,
    height: number,
    dataDraw: DataDraw,
    margin: Margin,
    //set_revenue: React.Dispatch<React.SetStateAction<number>>
}

export const GraphDrawComponent = ({width, height, dataDraw, margin, }: GraphDrawProps) => {
//<YAxis type="number" domain={[3, 5]} scale='auto'/>
let color = "#ff7300" 

const [min, setMin] = useState(dataDraw.data[0][dataDraw.dataKeys[0]]); 
const [max, setMax] = useState(0); 
const [simple, SetSimple] = useState(true);

const changeSimple = () => {
    if(simple) SetSimple(false)
    else SetSimple(true)
}

    return(
        <div>   
            {simple &&
                <LineChart
                    width={width}
                    height={height}
                    data={dataDraw.data}
                    margin={margin}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="stage" />
                    <YAxis type="number" domain={[min, max]}/>
                    <Tooltip/>
                    <Legend />
                    
                    {dataDraw.dataKeys.map((dataKey, index) => {
                        if(dataDraw.data[index][dataKey] < min) setMin(dataDraw.data[index][dataKey])
                        if(dataDraw.data[index][dataKey] > max) setMax(dataDraw.data[index][dataKey])

                        if(dataKey === "revenue") color = "green"
                        else if(dataKey === "not tax expenses") color = "red"
                        else color = "orange"

                        return (<Line 
                            type="monotone" 
                            dataKey={dataKey} 
                            stroke={color} 
                        />)})
                    }
                </LineChart>
            }
            {!simple &&
                    <LineChart
                    width={width}
                    height={height}
                    data={dataDraw.data}
                    margin={margin}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="stage" />
                    <YAxis type="number" domain={[min, max]}/>
                    <Tooltip/>
                    <Legend />
                    
                    {dataDraw.dataKeys.map((dataKey, index) => {
                        if(dataDraw.data[index][dataKey] < min) setMin(dataDraw.data[index][dataKey])
                        if(dataDraw.data[index][dataKey] > max) setMax(dataDraw.data[index][dataKey])

                        if(dataKey === "revenue") color = "green"
                        else if(dataKey === "not tax expenses") color = "red"
                        else color = "orange"

                        for(let i = 0; i < 5; i++) 
                        {
                            //global._revenue = 2//global._revenue * 1.2
                            //_revenue = _revenue * 1.2
                            //set_revenue(2000000000000)
                            return <Line 
                                type="monotone" 
                                dataKey={dataKey} 
                                stroke={color} 
                            />
                        }

                        return (<Line 
                            type="monotone" 
                            dataKey={dataKey} 
                            stroke={color} 
                        />)})
                    }
                </LineChart>
            }
            <button color="green" onClick={changeSimple}>txtButton</button>
        </div>
    )
}