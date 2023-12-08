export const Table = ({
    measure, 
    data
}:any) => {
    const dataKeys = Object.keys(data);
    return <table>
        <tr className="font-24">
            <th className="text-align-left">Measure</th>
            {
                dataKeys.map((item : string) => {
                    return <th key={item}>Class{item}</th>
                })
            }
        </tr>
        <tr>
            <td className="font-20 text-align-left">{measure} Mean</td>
            {
                dataKeys.map((item) =>{
                    return <td key={item}>{data[item]["mean"]}</td>
                })
            }
        </tr>
        <tr>
            <td className="font-20  text-align-left">{measure} Median</td>
            {
                dataKeys.map((item) =>{
                    return <td key={item}>{data[item]["median"]}</td>
                })
            }
        </tr>
        <tr>
            <td className="font-20  text-align-left">{measure} Mode</td>
            {
                dataKeys.map((item) =>{
                    return <td key={item}>{data[item]["mode"]}</td>
                })
            }
        </tr>
    </table>
}