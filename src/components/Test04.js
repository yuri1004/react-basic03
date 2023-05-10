import { useState } from "react";
import './test04.css'

// 변수
const allSize = [7,8,9,10,11,12,13];

// 작은 컴포넌트 만들기
// 1.
function String({no}){
    return(
    <span>{no}</span>
    )
}
// 2.
function ProSize({no,selects,noChange}){
    // const sizes = allSize;
    function optionSize(){
        // return selects.map((item,index)=>(<option value={item} key={index}> {item} </option>))
        return selects.map((item,index) => (<option value={item} key={index}>{item}</option>))
    }
    function changeSize(e){
        // console.log(e.target.value)
       return noChange(e.target.value)
    }
    return(
        <>
        <label htmlFor="size">size</label>
        <select id="size" 
                defaultValue={no} 
                onChange={changeSize}>
            {optionSize()}
        </select>
        </>
    )
}

// export
export default function Test04(){
    const [no,setNo] = useState(7);
    const [selects,setSelect] = useState(allSize);
    // console.log(selects);
    function noChange(change){
        setNo(change)
    }
    return(
        <div className="num">
            <p className="no">
                <String no={no}/>
            </p>
            <p className="select">
                <ProSize no={no} selects={selects} noChange={noChange} />
            </p>
        </div>
    )
}