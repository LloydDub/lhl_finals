// in collaboration with @dyoung4747

import React from 'react'

export default function SignUp() {
  return (
    <div className="md:flex-[0.5] flex-initial justify-center items-center">
      <form className="md:flex-[0.5] flex-initial justify-center items-center" action="/">
        <h2 id="sign_up" class="text-2xl text-white  py-3 text-center">Sign up for exclusive updates</h2>
        <ul className="text-center">
          
          <label for="name" className="text-white md:flex hidden list-none flex-row justify-center items-center flex-initial">Name:</label>
          <input type="text" id="name" name="user_name" className='rounded-full'></input>
        
        
          <label for="mail" className="text-white md:flex hidden list-none flex-row justify-center items-center flex-initial">E-mail:</label>
          <input type="email" id="mail" name="user_email" className='rounded-full'></input>
          
          <h5 className="text-white md:flex hidden list-none flex-row justify-center items-center flex-initial">By creating an account you agree to receive <br /> correspondence from us regarding "The RameNFT Bar"</h5>
          <button type="submit" className="bg-[#2952e3] text-white py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">Sign Up</button>
        </ul>
      </form>
    </div>
  )
}