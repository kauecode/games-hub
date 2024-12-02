import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms, { Platform } from '../hooks/usePlatforms'
import { GameAppError } from '../App'

interface PlatformSelectorProps {
  selectedPlatform: Platform | null,
  setSelectedPlatform:  (q: Platform) => void
  setError: ({} : GameAppError) => void
}

const PlatformSelector = ( {selectedPlatform, setSelectedPlatform, setError} : PlatformSelectorProps ) => {

  const {data, error, isLoading} = usePlatforms();

  useEffect(() => {
    if (error)
      setError({message: error, description: "Platform selection will not be available"})
  }, [error])

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