// import './App.css'
// import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import { useState } from 'react';


// function App() {
//   const [weight,setWeight] = useState(0)
//   const [height,setHeight] = useState(0)
//   const [bmi,setbmi] = useState(null)
//   const [heading, setHeading] = useState('BMI Value');
  


//   //conditional rendering
//   const [isWeight,setisWeight] = useState(true)
//   const [isHeight,setisHeight] = useState(true)

//   const Validate = (e)=>{
//    //console.log(e.target.value); 
//    //console.log(e.target.name); 

//    let value=e.target.value
//    let name=e.target.name
//    console.log(!!value.match(/^[0-9]*$/));
    
//    if(!!value.match(/^[0-9]*$/)){
//     if(name=="weight"){
//       setWeight(value)
//       setisWeight(true)
//      }
//      else{
//       setHeight(value)
//       setisHeight(true)
//      }
//    }
//    else{

//     if(name=="weight"){
//       setWeight(value)
//       setisWeight(false)
//    }
//    else{
//       setHeight(value)
//       setisHeight(false)
//    }
//   }
// }
//   const handleReset =()=>{
//     setWeight(0)
//     setHeight(0)
//     setbmi(null)
//     setisWeight(true)
//     setisHeight(true)
//     setHeading('BMI Value')
    
//   }
//   const calculateBmi = () => {
//       const heightInMeters = height / 100;
//       const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
//       setbmi(bmiValue);
//       console.log(bmiValue);
//       setHeading(bmiValue)
      
//   }

//   return (
//     <>
//        <div className='d-flex justify-content-center align-items-center flex-column p-5 ' style={{width:'100%',height:'100vh'}}>
//       <div className='border border-success shadow p-5 rounded' style={{backgroundImage:`url("https://st.depositphotos.com/1907633/5136/i/950/depositphotos_51366443-stock-photo-doctor-hand-with-medical-background.jpg")`, backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'top'}}>
//       <div className=' p-4 rounded text-light' style={{width:'500px',backgroundColor:'blue'}}>
//         <h1 className='text-center'>BMI Calculator</h1>
//       </div>
//       <h2 className='text-center mt-5'>{heading}</h2>
//       <form className='mt-3'>
//           <div className="mb-3 p-1 shadow">
//           <TextField id="outlined-basic" label="Enter your Height" name='height' onChange={(e)=>calculateBmi(e)} variant="outlined" className='w-100' />
//           </div>
//           <div className="mb-3 p-1 shadow">
//           <TextField id="outlined-basic"  label="Enter your Weight" name='weight' onChange={(e)=>calculateBmi(e)}  variant="outlined" className='w-100' />
//           </div>
          
//           <div className="d-flex justify-content-between w-100 mt-5 p-5">
//           <Button variant="contained" color="success"style={{width:'190px',height:'60px'}}>Calculate</Button>
//       <Button variant="outlined"style={{width:'190px',height:'60px',color:'darkblue',borderColor:'darkblue'}}>Reset</Button>
//           </div>

//         </form>


//       </div>
//     </div>
//     </>
//   )
// }

// export default App
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setbmi] = useState(null)
  const [heading, setHeading] = useState('BMI Value');
  


  //conditional rendering
  const [isWeight,setisWeight] = useState(true)
  const [isHeight,setisHeight] = useState(true)

  const Validate = (e)=>{
   //console.log(e.target.value); 
   //console.log(e.target.name); 

   let value=e.target.value
   let name=e.target.name
   console.log(!!value.match(/^[0-9]*$/));
    
   if(!!value.match(/^[0-9]*$/)){
    if(name=="weight"){
      setWeight(value)
      setisWeight(true)
     }
     else{
      setHeight(value)
      setisHeight(true)
     }
   }
   else{

    if(name=="weight"){
      setWeight(value)
      setisWeight(false)
   }
   else{
      setHeight(value)
      setisHeight(false)
   }
  }
}
  const handleReset =()=>{
    setWeight(0)
    setHeight(0)
    setbmi(null)
    setisWeight(true)
    setisHeight(true)
    setHeading('BMI Value')
    
  }
  const calculateBmi = () => {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setbmi(bmiValue);
      console.log(bmiValue);
      setHeading(bmiValue)
      
  }


  return (
   <>
   <div className='d-flex justify-content-center align-items-center border border-secondary rounded shadow' style={{width:'100%',height:'100vh'}}>
     <div className='bg-light p-4 rounded' style={{width:'400px',backgroundImage: `url("https://i.pinimg.com/originals/f8/da/46/f8da465672f14eb3595bd8828ecd0432.jpg")`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'right'}}> 
       
    
       

        
        <form className='mt-4 'style={{padding:'50px',height:"500px"}} >
          <div className='mb-3 ' >
          <h2 className='d-flex justify-content-center align-items-center mb-2 text-light' >Body Mass Index</h2>
          <h4 className='mt-3 mb-5 d-flex justify-content-center align-items-center text-danger'>{heading}</h4>
          <TextField id="outlined-basic" value={weight || ""} name='weight' label="Enter your Weight " variant="outlined" className='w-100 mt-1' onChange={(e)=>Validate(e)}/> 
           {!isWeight &&<p className='text-danger'>*invalid input</p>} 
          </div>
          
          <div className='mb-3'>
          <TextField id="outlined-basic" value={height || ""} name='height'  label="Enter your Height" variant="outlined"  className='w-100 mt-1' onChange={(e)=>Validate(e)}/>
            {!isHeight &&<p className='text-danger'>*invalid input</p>} 
          </div>
          
          <div className='d-flex justify-content-between w-100 mt-4'>
          <Button variant="contained" color="success" style={{width:'170px',height:'60px',marginTop:'20px'}} className='me-2'  onClick={calculateBmi}   disabled={isWeight&&isHeight?false:true} >Calculate</Button>
          
          <Button variant="outlined"  style={{width:'170px',height:'60px',marginTop:'20px' ,borderColor:'black',color:'darkblue'}}  className='ms-2' onClick={handleReset} >Reset</Button>
          
          </div>

        </form>

        </div>
       </div>
      
     
        
   </>
  )
}

export default App