interface Definition {
  definition: string
  example: string
  synonyms: string[]
  antonyms: string[]
}

interface IMeaning {
  partOfSpeech: string
  definitions: Definition[]
}

interface IPhonetic {
  text: string
  audio: string
}

export interface IWord {
  word: string
  phonetic: string
  phonetics: IPhonetic[]
  origin: string
  meanings: IMeaning[]
  sourceUrls: string[]
}
