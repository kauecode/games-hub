import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { GameAppError } from '../App'
import { Platform } from '../types/types'

interface PlatformSelectorProps {
  selectedPlatform: Platform | null,
  setSelectedPlatform:  (q: Platform | null) => void
  setError: ({} : GameAppError) => void
}

const PlatformSelector = ( {selectedPlatform, setSelectedPlatform, setError} : PlatformSelectorProps ) => {

  const {data, error, isFetching} = usePlatforms();

  useEffect(() => {
    if (error)
      setError({message: error.message, description: "Platform selection will not be available"})
  }, [error])

  if (error) return null

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown tabIndex={-1}/>}>
      {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
          <MenuItem 
            onClick={() => setSelectedPlatform(null)}>
            All Platforms
            </MenuItem>        
          {data?.results.map((platform) => 
            <MenuItem 
              onClick={() => setSelectedPlatform(platform)} 
              key={platform.id}>
              {platform.name}
            </MenuItem>
          )}
      </MenuList>
    </Menu>
    </>
  )
}

export default PlatformSelector