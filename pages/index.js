import Head from 'next/head'
// import Image from 'next/image'

import Header from '../components/global/Header'

export default function Home() {
  const Button = ({ type }) => {
    return (
      <button
        className={
          'Tags bg-green text-wsGrey-800 px-6 py-0.5 text-sm rounded-md shadow-sm' +
          type
        }
      >
        {type}
      </button>
    )
  }
  return (
    <div className=' bg-wsGrey-100'>
      <Head>
        <title>Bulu Furniture</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container h-screen mx-auto'>
        <Header />

        <div className='mb-12 MainWrapper'>
          <div className='w-7/12 ProductWrapper'>
            <h1 className='text-2xl'>Products</h1>
            <p className='my-3'>
              Look at regular things with unusual eyes. Browse through the list
              of products we have made and add it to your space.
            </p>
          </div>

          <div className='flex TagsWrapper gap-x-3'>
            <div>
              <Button type='Featured' />
            </div>
            <div>
              <Button type='Plants' />
            </div>
            <div>
              <Button type='Outdoor' />
            </div>
            <div>
              <Button type='Frames' />
            </div>
            <div>
              <Button type='Kitchen Ware' />
            </div>
            <div>
              <Button type='Living Room' />
            </div>
            <div>
              <Button type='Bedroom' />
            </div>
          </div>
        </div>

        <div className='mb-12 MainWrapper'>
          <h1 className='text-2xl'>Featured Work</h1>
          <p className='my-3'>
            A selection of furniture designed to accomodate any space or room
            they are put in.
          </p>
        </div>
        <div>
          <div className='grid gap-2 sm:grid-cols-2'>
            <div className='rounded-sm bg-green'>
              <img
                src='/img/furniture/img07.jpg'
                alt=''
                className='object-cover w-full'
              />
            </div>
            <div className='rounded-sm bg-green '>
              <img
                src='/img/furniture/img02.jpg'
                alt=''
                className='object-cover w-full'
              />
            </div>
            <div className='rounded-sm bg-green '>
              <img
                src='/img/furniture/img05.jpg'
                alt=''
                className='object-cover w-full'
              />
            </div>
            <div className='rounded-sm bg-green '>
              <img
                src='/img/furniture/img18.jpg'
                alt=''
                className='object-cover w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}