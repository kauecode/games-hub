import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { useEffect } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { GameAppError } from '../App'
import { Platform } from '../types/types'
import usePlatform from '../hooks/usePlatform'

interface PlatformSelectorProps {
  selectedPlatformId?: number,
  setSelectedPlatform:  (id: number | undefined) => void
  setError: ({} : GameAppError) => void
}

const PlatformSelector = ( {selectedPlatformId, setSelectedPlatform, setError} : PlatformSelectorProps ) => {

  const {data, error, isFetching} = usePlatforms();

  useEffect(() => {
    if (error)
      setError({message: error.message, description: "Platform selection will not be available"})
  }, [error])

  const selectedPlatform = usePlatform(selectedPlatformId)

  if (error) return null

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown tabIndex={-1}/>}>
      {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
          <MenuItem 
            onClick={() => setSelectedPlatform(undefined)}>
            All Platforms
            </MenuItem>        
          {data?.results.map((platform) => 
            <MenuItem 
              onClick={() => setSelectedPlatform(platform.id)} 
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