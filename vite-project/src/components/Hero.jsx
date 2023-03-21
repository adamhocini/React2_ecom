import React from 'react'

export const Hero = ({ title, subtitle, btn1, bnt2, text, img }) => {
  return (
    <>
        <div className=''>
            <div className=''>
                <div className=''>
                    <h1 className=''>{title}</h1>
                    <h1 className=''>{subtitle}</h1>
                    <p className=''>{text}</p>
                    <div className=''>
                        <button type='button' className=''>{btn1}</button>
                        <button type='button' className=''>{bnt2}</button>
                    </div>
                </div>
                <div className=''>
                    <img src={img} alt='' className=''/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero