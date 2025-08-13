import React, { useState } from 'react'
import Contact from './components/Contact'
import Address from './components/Address';
import Password from './components/Password';

const Signup = ({setScreen}) => {
    const [userDetail,setUserDetail] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "", 
    city: "",
    street: "",
    deliveryDescription: "",
    })
    const [stage,setstage]= useState(1);
  return (
    <div className='p-3'>
        <div className=''>
            <div className='text-2xl font-bold text-center text-orange-400'>
                Signup
            </div>
            <div >
                {
                    stage == 1 && <Contact
                    userDetail={userDetail}
                    setUserDetail={setUserDetail}
                    setstage={setstage}
                    />
                }
                
                {
                    stage== 2 && <Address
                    userDetail={userDetail}
                    setUserDetail={setUserDetail}
                    setstage={setstage}
                    />
                }
                {
                    stage== 3 && <Password
                    userDetail={userDetail}
                    setUserDetail={setUserDetail}
                    setstage={setstage}
                    />
                }
            </div>
        </div>
        <div className='text-center relative top-7'>
            Already have an account ? <span className='cursor-pointer hover:text-blue-700' onClick={()=> setScreen(false)}>Login</span>
        </div>
    </div>
  )
}

export default Signup
