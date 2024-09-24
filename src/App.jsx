import { useState } from 'react'
import './App.css'
import { Stack, TextField,Button } from '@mui/material'

function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] =useState(0)
  
  const [isPrincipleInvalid,setIsPrincipleInvalid] = useState(false)
  const [isRateInvalid,setIsRateInvalid] = useState(false)
  const [isYearInvalid,setIsYearInvalid] = useState(false)


  const userInputValidation=(inputTag)=>{
  const {name,value} = inputTag
  console.log(name,value);
  //check number pattern in value
  console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
  console.log(!!value.match(/^\d*\.?\d+$/))
  //principle amount validation
   if(name==="principle"){
    setPrinciple(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsPrincipleInvalid(false) : setIsPrincipleInvalid(true)
   }
     //rate  validation
   else if(name==="rate"){
    setRate(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsRateInvalid(false) : setIsRateInvalid(true)
   }
     //year  validation
   else if(name==="year"){
    setYear(value)
    !!value.match(/^\d*\.?\d+$/) ? setIsYearInvalid(false) : setIsYearInvalid(true)
   }
  }
   //calculation
  const handelCalculate =()=>{
    if(principle && rate && year)
      {
      setInterest(principle*rate*year/100)
    }
    else{
      alert("Please fill the form Completely!!")
    }
  }
  //reset
  const handleReset=()=>{
    setPrinciple(0)
    setInterest(0)
    setRate(0)
    setYear(0)
    isPrincipleInvalid(0)
    isRateInvalid(0)
    isYearInvalid(0)
  }
  return (
    <div style={{height:'100vh'}} className='bg-dark  d-flex justify-content-center align-items-center'>
     <div style={{width:'600px'}} className='bg-light rounded p-5'>
      <h3>Simple intereset Calculator</h3>
      <p>Calculate your simple intereset Easily!</p>
      <div className="bg-warning text-light  d-flex flex-column justify-content-center align-items-center p-3 shadow rounded ">
        <h1>₹ {interest}</h1>
        <p>Total Simple Interest</p>
      </div>
      {/* form */}
      <form className='mt-3' action="">
        {/* principle */}
        <div className='mb-3'>
        <TextField value={principle || ""} name='principle' onChange={e=>userInputValidation(e.target)} className='w-100'  id="outlined-principle" label="₹ Principle Amount" variant="outlined" />     
        </div>
        {
          isPrincipleInvalid && <div className="mb-3 text-danger fw-bolder">*Invalid Principle Amount</div>

        }
        {/* rate */}
        <div className='mb-3'>
        <TextField value={rate || ""} name='rate' onChange={e=>userInputValidation(e.target)}   className='w-100' id="outlined-rate" label="₹ Rate of Interest (%)" variant="outlined" />     
        </div>
        {
          isRateInvalid && <div className="mb-3 text-danger fw-bolder">*Invalid Rate </div>

        }
        {/* year */}
        <div className='mb-3'>
        <TextField value={year || ""}  name='year' onChange={e=>userInputValidation(e.target)} className='w-100' id="outlined-year" label="Time Period(yr)" variant="outlined" />     
        </div>
        {
          isYearInvalid && <div className="mb-3 text-danger fw-bolder">*Invalid Year</div>

        }
        <Stack  direction="row" spacing={2}>
        <Button onClick={handelCalculate} disabled={isPrincipleInvalid || isRateInvalid || isYearInvalid} style={{width:'50%',height:"70px"}} className='bg-dark' variant="contained">Calculate</Button>
        <Button onClick={handleReset} style={{width:'50%',height:"70px"}} className='border-dark text-dark' variant="outlined">Reset</Button>
        </Stack>
      </form>
       </div>
    </div>
  )
}

export default App
