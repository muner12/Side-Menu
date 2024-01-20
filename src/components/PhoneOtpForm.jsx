import React,{useState} from 'react'

function PhoneOtpForm() {
  const [phoneNumber,setPhoneNumber]=useState("");
  const [showOtpInput,setShowOtpInput]=useState(false);
  //handle phone number while change
  const handlePhoneNumber=(event)=>{
    setPhoneNumber(event.target.value);
  }
  
  
  const handleSubmit=(event)=>{

    event.preventDefault();
    //validate phone number 

    const regex=/[^0-9]/g;
    if(phoneNumber.length<10 || regex.test(phoneNumber)){
      alert("invalid phone number");
      return 
    }
    setShowOtpInput(true);
  }
  return (
    <div className='flex justify-center items-center p-2 border  overflow-hidden'>
   {!showOtpInput ?
     (<form onSubmit={handleSubmit} className='flex gap-5'>
    <input
      type='text' 
      value={phoneNumber}
      onChange={handlePhoneNumber}
      placeholder='Enter Phone Number'
      className='p-2 '
    />
    <button type='submit' className='p-1 border rounded-md text-white bg-blue-600'>Submit</button>
      
    </form>
    ):<div>OTP inputs</div>
   }

    </div>
  )
}

export default PhoneOtpForm