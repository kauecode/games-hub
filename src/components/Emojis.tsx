import React from 'react'
import Excellent from '../assets/excellent.png'
import ThumbsUP from '../assets/thumbs-up.png'
import Meh from '../assets/meh.webp'
import Skip from '../assets/skip.png'
import { Image, ImageProps } from '@chakra-ui/react'

interface EmojisProps {
  rating: number
}

const emojiMap: { [key: number]: ImageProps} = {
  5 : { alt: 'EGGcellent', src: Excellent, boxSize: 9},
  4 : { alt: 'Recomended', src: ThumbsUP, boxSize: 7},
  3 : { alt: 'Meh', src: Meh, boxSize: 7},
  0 : { alt: 'Skipdi', src: Skip, boxSize: 7},
}

const Emojis = ({rating} : EmojisProps) => {
  return (
    <Image {...emojiMap[rating]} />
  )
}

export default Emojis