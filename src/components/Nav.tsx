import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <>
    <nav className="justify-between items-center flex drop-shadow border border-t-0 fixed top-0 left-0 right-0 z-10 white-bg">
        {/* Mobile nav */}
        <Link href={'/'} id='logo' className='dark-txt py-3 ps-2  rounded '>Aller<span className='mint-txt'>Track</span></Link>
        <div id="mobile-menu-btn">
         <button className='me-2'>|||</button>
        </div>

    </nav>
    </>
  )
}
