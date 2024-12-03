import Excellent from '../assets/excellent.png'
import ThumbsUP from '../assets/thumbs-up.png'
import Meh from '../assets/meh.webp'
import Skip from '../assets/skip.png'
import { Image, ImageProps } from '@chakra-ui/react'

interface EmojisProps {
  rating: number
}

const emojiMap: { [key: number]: ImageProps} = {
  5 : { alt: 'EGGcellent', src: Excellent, boxSize: 7},
  4 : { alt: 'Recomended', src: ThumbsUP, boxSize: 6},
  3 : { alt: 'Meh', src: Meh, boxSize: 6},
  0 : { alt: 'Skipdi', src: Skip, boxSize: 6},
}

const Emojis = ({rating} : EmojisProps) => {
  return (
    <Image display='inline' {...emojiMap[rating]} />
  )
}

export default Emojis