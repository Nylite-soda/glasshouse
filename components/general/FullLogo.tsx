import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FullLogo = (height:number, width: number) => {
  return (
    <Link href="/" className="flex gap-2.5 items-center">
        <Image alt='logo' src='/images/single-logo.png' width={width} height={height} />
        <span className='font-bold text-lg'>Glass House Waters</span>
    </Link>
  )
}

export default FullLogo