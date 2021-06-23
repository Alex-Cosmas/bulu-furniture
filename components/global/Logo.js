import Link from 'next/link'

const Logo = () => {
  return (
    <>
      <Link href='/'>
        <a>
          <img src='/img/logo.jpg' alt='' className='w-20 h-20' />
        </a>
      </Link>
    </>
  )
}

export default Logo
