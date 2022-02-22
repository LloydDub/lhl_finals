import React from 'react'
import ramen1 from '../assets/ramen1.png'
import ramen2 from '../assets/ramen2.png'
import ramen3 from '../assets/ramen3.png'
import ramen4 from '../assets/ramen4.png'
import ramen5 from '../assets/ramen5.png'
import solanaLogoMark from '../assets/solanaLogoMark.png'

export default function CollectionCard({id, name, image}) {
  return (
    <div class="images" className='gradient-bg-welcome'>
        <h1 id='just_minted' className='text-2xl text-white  py-3 text-center'>Explore our Collection</h1>
        <div class="images__container">
            <div class="images__card">
                <h2>CryptoBowls</h2>
                <p>Bowl #0001</p>
            </div>
            <div class="images__card">
                <h2>CryptoBowls</h2>
                <p>Bowl #0002</p>
            </div>
            <div class="images__card">
                <h2>CryptoBowls</h2>
                <p>Bowl #0003</p>
            </div>
            <div class="images__card">
                <h2>CryptoBowls</h2>
                <p>Bowl #0024</p>
            </div>
            <div class="images__card">
                <h2>CryptoBowls</h2>
                <p>Bowl #0169</p>
            </div>
        </div>
    </div>
  )
}
