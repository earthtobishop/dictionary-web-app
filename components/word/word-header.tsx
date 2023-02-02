import React, { FC } from 'react'
import { IWordProps } from './interfaces/IWord'

const WordHeader: FC<IWordProps> = ({ word, audio }) => {
  // if (word.phonetics && word.phonetics.length > 0) {
  //   const audio = new Audio(word.phonetics[0].audio)
  //   console.log(audio)
  // }

  const playAudio = () => {
    if (!audio) {
      return
    }
    audio.play()
  }

  return (
    <div className='mt-[10%] lg:mt-[5%] flex items-center justify-between'>
      <div className='flex flex-col gap-4'>
        <h1 className='font-bold text-[32px]'>{word.word}</h1>
        <p className='text-[#a445ed] text-[18px]'>{word.phonetic}</p>
      </div>
      <div onClick={playAudio}>
        <img src='/assets/images/icon-play.svg' alt='' />
      </div>
    </div>
  )
}

export default WordHeader
