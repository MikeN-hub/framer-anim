import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const Collapseable = (props) => {
  const { title = 'Hello everyone!', children } = props
  const [isVisible, setIsVisible] = useState(true)
  const handleVisibility = () => {
    setIsVisible(!isVisible)
    console.log(isVisible)
  }

  return (
    <>
      <button
        onClick={handleVisibility}
        style={{
          padding: '1rem',
          width: '150px',
          cursor: 'pointer',
          margin: '30px 0',
          borderRadius: '10px',
          border: '1px solid black',
          backgroundColor: '#ccc',
        }}
      >
        {title}
      </button>
      <AnimatePresence initial={false}>
        {isVisible && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
            exit={{ height: 0 }}
            style={{
              overflow: 'hidden',
              border: '1px solid #ddd',
              width: '300px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                padding: '1rem',
              }}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Collapseable
