//in collaboration with @dyoung4747

import React from 'react'

import {BsInfoCircle} from 'react-icons/bs'

import { Loader } from '.'
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

export default function Welcome() {

  const connectWallet = () => ( {})

  return (
    <div className='flex w-full justify-center items-center'>
     <div className='flex md:flex-row flex-col items-start justify-between md:pd-20 py-12 px-4'>
      <div className='flex flex-1 justify-start flex-col md:mr-10'>
        <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
          With The RameNFT Bar you can mint and <br />make  your own, delicious NFT's!
        </h1>
        <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>
        Just connect your wallet. <br/> 
        Select Mint. <br/> 
        And BOOM! You own a unique & tasty RameNFT from our highly touted premier collection of 888.
        </p>
        <button
          type='button'
          onClick={connectWallet}
          className='flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]  '
        >
         <p className='text-white text-base font-semibold'>
         Connect Wallet
         </p>
        </button>
        <div className='grid sm:grid-cols-3 grid-cols-2 w-full mt-10'>
          <div className={`rounded-tl-2xl ${commonStyles} `}>
              Blockchain
          </div>
            <div className={commonStyles}>
              Web 3.0
            </div>
            <div className={`rounded-tr-2xl ${commonStyles} `}>
              Solana
          </div>
          <div className={`rounded-bl-2xl ${commonStyles} `}>
              888 unique assets
          </div>
            <div className={commonStyles}>
              Hassle free
            </div>
            <div className={`rounded-br-2xl ${commonStyles} `}>
              Uses Phantom Wallet
          </div>
        </div>
      </div>
     </div>
   </div>
  )
}
