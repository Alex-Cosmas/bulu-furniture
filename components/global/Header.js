import Logo from '../global/Logo'
const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between py-12 Header__Wrapper'>
        <div className='flex'>
          <Logo />
          <ul className='flex items-center gap-4 ml-6'>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
          </ul>
        </div>
        <div>
          <div>
            <ul className='flex items-center gap-4'>
              <li>
                <span>Account</span>
              </li>
              <li>
                <span>Search</span>
              </li>
              <li>
                <span>Cart</span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
