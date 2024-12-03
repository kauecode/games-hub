import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiAtari, SiNintendo, SiSega } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platforms } from '../hooks/useGames'
import { HStack, Icon, VisuallyHidden } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { HiDesktopComputer } from "react-icons/hi";
import { wrap } from 'framer-motion';


interface PlatformIconListProps {
  platforms: Platforms[]
}

const PlatformIconList = ( {platforms } : PlatformIconListProps) => {

  // Annotating this a Index Signature, Key/Value pair,
  // key is a string and value is a react icons type
  // This is done so TS doesnt complain in the map below
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
    "3do" : SiSega,
    atari : SiAtari,
    "commodore-amiga" : HiDesktopComputer

  }

  return (
    <>
      <HStack flexWrap='wrap'>
      {platforms.map((platform) => 
        <Icon 
          boxSize={4} 
          color="gray.500" 
          key={platform.id} 
          as={iconMap[platform.slug]} 
          title={platform.name}
          aria-label={`Icon for ${platform.name}`}>
            <VisuallyHidden>Icon for {platform.name}</VisuallyHidden>
        </Icon>
      )}
      </HStack>
    </>
  )
}

export default PlatformIconList