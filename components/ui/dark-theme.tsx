import React, { FC } from 'react'

const DarkTheme: FC = () => {
  return (
    <style jsx global>{`
      :root {
        --background-color: rgb(14, 14, 14);
        --input-color: #1f1f1f;
        --text-color: rgb(230, 230, 230);
      }
    `}</style>
  )
}

export default DarkTheme
