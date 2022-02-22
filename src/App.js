import { motion } from 'framer-motion'
import logo from './logo.svg'
import './App.css'

function App() {
  const pVariants = {
    hidden: {
      opacity: 0,
      x: -1000,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0,
        duration: 2,
      },
    },
  }
  const text = ['text 1', 'text 2', 'text 3']
  const listVariants = {
    hidden: {
      opacity: 0,
      y: 300,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.5,
      },
    }),
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <motion.img
          src={logo}
          className='App-logo'
          alt='logo'
          animate={{ rotate: 360 }}
          transition={{
            duration: 2,
            repeat: 2,
            repeatDelay: 1,
            repeatType: 'reverse',
            type: 'just',
          }}
        />
        <motion.p variants={pVariants} initial='hidden' animate='visible'>
          Edit <code>src/App.js</code> and save to reload.
        </motion.p>
        <motion.a
          whileHover={{ color: 'rgb(255, 255, 255)', scale: 1.2 }}
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </motion.a>
        <ul>
          {text.map((item, i) => (
            <motion.li
              key={item}
              variants={listVariants}
              initial='hidden'
              animate='visible'
              custom={i}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
