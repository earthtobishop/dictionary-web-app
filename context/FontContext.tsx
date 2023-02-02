import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

type fontContextType = {
  font: string
  setFont: Dispatch<SetStateAction<string>>
}

const FontContext = createContext<fontContextType>(undefined!)

export const useFont = () => {
  return useContext(FontContext)
}

type Props = {
  children: ReactNode
}

export const AuthProvider: FC<Props> = ({ children }) => {
  const [font, setFont] = useState('Sans Serif')

  const value = {
    font,
    setFont
  }

  return (
    <>
      <FontContext.Provider value={value}>{children}</FontContext.Provider>
    </>
  )
}
