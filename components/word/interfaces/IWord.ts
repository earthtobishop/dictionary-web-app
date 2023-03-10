import { IWord } from '@/lib/interfaces/IWord'

export interface IWordProps {
  word: IWord
  audio?: HTMLAudioElement | undefined
}
