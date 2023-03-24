import React from 'react'

const Flag = ({isImportant, onClick, style}) => {
  return (
    <div onClick={onClick} style={{width: "40px", cursor: "pointer", ...style}}>
            {isImportant ? (
              <img src="./assets/filled-flag.png" alt="imp" width="100%"  />
            ) : (
              <img src="./assets/outline-flag.png" width="100%" />
            )}
          </div>
  )
}

export default Flag
