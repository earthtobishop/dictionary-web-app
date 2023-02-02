import React, { FC } from 'react'

const Search: FC = () => {
  return (
    <div className='input-group relative flex flex-wrap h-[48px] items-stretch w-full mt-[10%] md:mt-[5%]'>
      <input
        type='search'
        className='form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal bg-clip-padding rounded-xl transition ease-in-out m-0 outline-0 border-0 '
        placeholder='Search'
        aria-label='Search'
        aria-describedby='button-addon2'
      />
      <button
        className='btn inline-block px-6 py-2.5 bg-inherit font-medium text-xs leading-tight uppercase  flex items-center search-icon rounded-xl'
        type='button'
        id='button-addon2'
      >
        <div className='w-4'>
          <img src='/assets/images/icon-search.svg' alt='' />
        </div>
      </button>
    </div>
  )
}

export default Search
