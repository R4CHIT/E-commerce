import React, { useState } from 'react'
import Contact from './components/Contact'
import Address from './components/Address';
import Password from './components/Password';

const Signup = () => {
    const [userDetail,setUserDetail] = useState({
    username: "",
    email: "",
    contactNumber: "",
    password: "", 
    city: "",
    street: "",
    deliveryDescription: "",
    })
    const [stage,setstage]= useState(0);
  return (
    <div className='p-3'>
        <div className=''>
            <div className='text-2xl font-bold text-center text-orange-400'>
                Signup
            </div>
            <div >
                {
                    stage == 0 && <Contact
                    userDetail={userDetail}
                    setUserDetail={setUserDetail}
                    setstage={setstage}
                    />
                }
                {
                    stage== 1 && <Password
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
            </div>
        </div>
    </div>
  )
}

export default Signup
