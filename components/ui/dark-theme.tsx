import React, { FC } from 'react'

const DarkTheme: FC = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(14, 14, 14);
        --text-color: rgb(230, 230, 230);
      }
    `}</style>
  )
}

export default DarkTheme
