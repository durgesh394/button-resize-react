import React, { useState } from 'react'

const ButtonResize = () => {

 
  const [style1, setstyle1] = useState();
  const [style2 ,setstyle2] = useState()
  const [style3 ,setstyle3] = useState()
  const [style4 ,setstyle4] = useState();
  const [style5 ,setstyle5] = useState();
  const [style6 ,setstyle6] = useState();




  function btn3(){
    setstyle1({
      width : "50px"
    })
    setstyle2({
      width : "50px"
    })
  }
  

function btn5(){
  setstyle4({
    width : "50px"
  })
  setstyle3({
    width : "50px"
  })
}
  return (
    <>
      <div className="style">
        <button  style={style1} className="good">one</button>
        <button  style={style2} className="good">two</button>
        <button onClick={()=>{btn3()}} style={style3} className="good">Three</button>
        <button style={style4} className="good">four</button>
        <button  onClick={()=>{btn5()}}  className="good">five</button>
        <button className="good">six</button>
      </div>
    </>
  )
}


export default ButtonResize