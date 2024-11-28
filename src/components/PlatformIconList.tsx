import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs';
import { Platforms } from '../hooks/useGames'
import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';

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
    android: FaAndroid
  }

  return (
    <>
      <HStack marginY={2}>
      {platforms.map((platform) => 
        <Icon color="gray.500" key={platform.id} as={iconMap[platform.slug]} data-name={platform.slug}/>
      )}
      </HStack>
    </>
  )
}

export default PlatformIconList