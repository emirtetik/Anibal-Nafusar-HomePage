import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import classNames from 'classnames'

const Logo = () => {
  const { theme } = useTheme();

  const logoClass = classNames({
    '/assets/logo_white.png': theme === 'light',
    '/assets/logo_black.png': theme === 'dark',
  });

  return (
    <div className='flex '>
      <div className='header-div rounded-full absolute top-6 sm:top-9 z-10 hover:animate-spin transition-all duration-150 ease-in-out '>
        <Link href={"/"}>
          <Image width={120} height={120} src={logoClass} alt="logo" />
        </Link>
      </div>
    </div>
  )
}

export default Logo
