import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
      <header className="text-white body-font bg-sky-900">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href='/' className="mr-5 hover:text-gray-300">PHONE</Link>
      <Link  href='/phone-case' className="mr-5 hover:text-gray-300">PHONE CASE</Link>
      <Link  href='/watches' className="mr-5 hover:text-gray-300">WATCHES</Link>
      <Link  href='/Linkccessories' className="mr-5 hover:text-gray-300">ACCESSORIES</Link>
    </nav>
    </div>
</header>

  )
}

export default Header
