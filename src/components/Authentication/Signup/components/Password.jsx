import React, { useRef, useState } from 'react'
import InputDetails from '../../../Cart/InputDetails'
import OrangeButton from '../../../Button/OrangeButton'
import signupApi from '../../../Api/Auth/signupApi'
import { useNavigate } from "react-router";
import Loading from '../../../ui/Loading';
const Password = ({userDetail,setUserDetail,setstage}) => {
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const passwordRef = useRef()
  const errorMessageRef = useRef()
  const conformpasswordRef = useRef()
  const [error,setError] = useState()
    
    const handleProceed = async() => {
      
      if (passwordRef.current.value == "" || passwordRef.current.value.length < 2) {
        errorMessageRef.current='password should be provided Correctly'
        setError(1);
      }
      else if(conformpasswordRef.current.value !== passwordRef.current.value){
        
        errorMessageRef.current = "Password and Conform Password Does't match"
        setError(2)
        console.log(errorMessageRef.current);
        
      } else {
        setError(0);
        let username = userDetail.username
        let email = userDetail.email
        let contactNumber =userDetail.contactNumber
        let city = userDetail.city
        let street = userDetail.street
        let deliveryDescription = userDetail.deliveryDescription
        errorMessageRef.current=null
        setUserDetail({
        username: username,
        email: email,
        contactNumber: contactNumber,
        password: passwordRef.current.value,
        city: city,
        street: street,
        deliveryDescription: deliveryDescription,
      });
      try {
        setLoading(true)
        await signupApi(userDetail,navigate,setstage,setUserDetail);
      } catch (error) {
        
      }finally{
        setLoading(false)
      }
      }
    };
  return (
    <div>
      <div className="flex flex-col gap-4 justify-center items-center relative top-5">
      <InputDetails
        label={"password"}
        placeholder={"Enter your password"}
        ref={passwordRef}
        error={error == 1 && true}
        errorMessage={errorMessageRef.current}
      />
      <InputDetails
        label={"Conform Password"}
        placeholder={"Enter your password"}
        ref={conformpasswordRef}
        error={error == 2 && true}
        errorMessage={errorMessageRef.current}
      />
      {loading ?(<Loading />):(<OrangeButton title={"Proceed"} onClick={() => handleProceed()} />)}
    </div>
    </div>
  )
}

export default Password
