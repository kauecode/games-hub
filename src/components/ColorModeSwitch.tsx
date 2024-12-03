import { useColorMode, Button, transition } from "@chakra-ui/react"
import { FaMoon } from "react-icons/fa"
import { IoSunny } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const MotionBox = motion.div; // Use motion.div or motion(Box) for Chakra components

const ColorModeSwitch = () => {

  const {toggleColorMode, colorMode} = useColorMode()

  const dropIn = {
    hidden: {
      y: "-20px",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: "10px",
      opacity: 0
    }
  }

  return (
      <Button 
        variant={'ghost'} 
        onClick={() => toggleColorMode()}
        borderRadius={'full'}
        aria-label={colorMode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={colorMode === "dark" ? "true" : "false"}
        >
        <AnimatePresence initial={false} mode={"wait"} onExitComplete={() => null}>
        <MotionBox
          variants={dropIn}
            initial={"hidden"}            
            animate={"visible"}
            exit={"exit"}
            key={colorMode} // Ensures Framer Motion re-runs the animation on key change
          >        
          {colorMode === 'dark' ? <IoSunny fontSize={20} /> : <FaMoon fontSize={20} />}        
        </MotionBox>        
        </AnimatePresence>            
      </Button>
  )
}

export default ColorModeSwitch