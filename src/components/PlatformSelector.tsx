import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'

interface PlatformSelectorProps {
  selectedPlatform: Platform | null,
  setSelectedPlatform:  (q: Platform) => void
}

const PlatformSelector = ( {selectedPlatform, setSelectedPlatform} : PlatformSelectorProps ) => {

  const {data, error, isLoading} = usePlatforms();

  if (error) return null

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
      {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
          {data.map((platform) => <MenuItem onClick={() => setSelectedPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
      </MenuList>
    </Menu>
    </>
  )
}

export default PlatformSelector