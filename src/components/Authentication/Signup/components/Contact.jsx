import React, { useRef, useState } from 'react'
import InputDetails from '../../../Cart/InputDetails'
import OrangeButton from '../../../Button/OrangeButton';

const Contact = ({userDetail,setUserDetail,setStage}) => {
    const nameRef = useRef();
    const emailRef = useRef()
    const contactRef = useRef()
    const [error,setError]=useState(0)
    const handleClick=()=>{
        if(nameRef.current.value == ""){
            setError(1)
        }
        else if(nameRef.current.value == ''){
            setError(3)
        }
        else if(nameRef.current.value == ''){
            setError(3)
        }
        else{
            setError(0)
        }
    }

  return (
    <div className='flex flex-col gap-4 justify-center items-center relative top-5'>
      <InputDetails label={"Name"} placeholder={"Enter your Name"} ref={nameRef} error={error==1 && true}  />
      <InputDetails label={"Email"} placeholder={"Enter your email"} ref={emailRef} error={error==2 && true}/>
      <InputDetails label={"Contact Number"} placeholder={"Enter your contact"} ref={contactRef} error={error==3 && true}/>
      <OrangeButton title={"Proceed"} onClick={()=>handleClick()}/>
    </div>
  )
}

export default Contact
