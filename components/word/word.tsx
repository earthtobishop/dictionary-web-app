import React, { FC } from 'react'
import { IWordProps } from './interfaces/IWord'
import WordHeader from './word-header'

const Word: FC<IWordProps> = ({ word }) => {
  // console.log(word)
  const definitions = word.meanings[0].definitions
  const limitedDefinitions = definitions.slice(0, 3)

  return (
    <>
      <WordHeader word={word} />
      <div className='flex items-center mt-5 gap-4'>
        <div>{word.meanings[0].partOfSpeech}</div>
        <div className='flex-grow border-t border-gray-400'></div>
      </div>
      <div className='flex flex-col mt-4 mx-2'>
        <h1 className='text-[16px] text-[#757575]'>Meaning</h1>
        <ul className='flex marker:text-[#8f19e8] flex-col gap-4 lg:gap-6 mt-2 list-disc'>
          {limitedDefinitions.map((def) => (
            <li key={def.definition}>{def.definition}</li>
          ))}
        </ul>
      </div>
      <div className='flex-grow border-t border-gray-400 mt-4'>
        <h1 className='text-[16px] text-[#757575] underline mt-5'>Source</h1>
        <p>{word.sourceUrls[0]}</p>
      </div>
    </>
  )
}

export default Word
