import React from 'react'
import Cards from './Cards';
import arr from './Sdata.jsx'


//Without using Fat Arrow Functions
function ncard1(val){
  console.log(val);
  return(
    <Cards imgsrc={val.img}  title="A  Netflix  Original  Series"  sname={val.name}  slink={val.link} />
  );
}

//Using Fat Arrow Function
const ncard2=(val)=><Cards imgsrc={val.img}  title="A  Netflix  Original  Series"  sname={val.name}  slink={val.link} />


const App = () => (
  <>
    <h1 className = "heading">MY TOP 6 NETFLIX SERIES</h1>

    {/* {arr.map(ncard2)} */}

    {arr.map((val,index)=>{
      console.log(index);
      console.log(val);
      return(
        <Cards
          key={val.id} 
          imgsrc={val.img}  
          title={val.title}
          sname={val.name}  
          slink={val.link} 
        />
      );
    })}
  </>

);


/*---------------------------------------------------------------------------------------------------------------*/



//Fat Arrow Functions in ES6

//Without using Fat Arrow Func
function add1(a,b){
  return a+b
}

//Using Fat Arrow Func
const add2=(a,b)=>a+b

//console.log(add2(5,6));

export default App;