import { useState } from 'react';
import './test03.css';

// 변수
const AllColors = ['blue','brown','green','purple','red'];

// 작은 컴포넌트
function ProImg({color}){
    return (
        <img src={`./images/${color}.jpg`} alt={color} />
    )
}
function ProColor({colors,color,colorChange}){
    function optionColor(){
        return colors.map((item,index)=>{return <option value={item} key={index}> {item} </option>})
    }
    function changeColor(e){
        // console.log(e.target.value);
        colorChange(e.target.value)
    }
    return (
        <p>
            <label htmlFor="usercolor">color:</label>
            <select id="usercolor" defaultValue={color} onChange={changeColor}>
               {optionColor()}
            </select>
        </p>
    )
}


// export
export default function Test03(){
    // 변경될값을 적용할아이들
    const [color,setColor] = useState('green');
    const [colors,setColors] = useState(AllColors);
    function colorChange(selectColor){
       setColor(selectColor);
    }
    return(
        <div className="custom">
            <div className="pic">
                <ProImg color={color}/>
            </div>
            <div className="selector">
                <ProColor color={color} colors={colors} colorChange={colorChange}/>
            </div>
        </div>
    )
}