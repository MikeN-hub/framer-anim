import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './Button';

const Filter = ({data}) => {
  const [cards, setCards] = useState(data.filter(el => el.category === 'cars'));
  return (
    <div>Filter</div>
  )
}

export default Filter