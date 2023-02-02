import { Dispatch, SetStateAction } from 'react'

export interface ISearch {
  searchText: string
  setSearchText: Dispatch<SetStateAction<string>>
}
