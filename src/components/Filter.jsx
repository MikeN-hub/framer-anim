import React, { useState } from 'react'
import Button from './Button'

const Filter = ({ data }) => {
  const [cards, setCards] = useState(
    data.filter((item) => item.category === 'cars')
  )
  const buttons = data.reduce((acc, current) => {
    if (acc.includes(current.category)) {
      return acc
    }
    return [...acc, current.category]
  }, [])

  const handleCards = (selector) => {
    setCards((item) => item.category === selector)
  }

  return (
    <div>
      <div>
        {buttons.map((button) => (
          <Button
            key={button}
            text={button}
            onClick={() => handleCards({ button })}
          />
        ))}
      </div>
    </div>
  )
}

export default Filter
