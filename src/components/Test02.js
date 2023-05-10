export default function Test02(){
    
    // const AllSize = [7,8,9,10,11,12,13];
    // const AllSize = (function(min,max){
    //     const sizes = [];
    //     for(let i=min; i<=max ; i++){
    //         sizes.push(i);
    //         console.log(sizes)
    //     }
    //     return sizes
    // })(7,13);


    // const AllSize = [7,8,9,10,11,12,13];
       const AllSize = (function(min,max){
        const sizes = [];
        for(let i=min; i<=max ; i++){
            sizes.push(i);
            sizes.push(i + 0.5);
            console.log(sizes);
        }
        return sizes
    })(7,13);






    function optionSize(){
        const sizes = AllSize;
        return AllSize.map((item,index)=> (<option value={item} key={index}> {item} </option>) )
    }
    return(
        <p>
          <label htmlFor="usersize">size:</label>
          <select id="usersize">
            {optionSize()}
          </select>
        </p>
    )
}