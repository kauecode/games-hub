import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import { useContext } from 'react'
import { SystemAlertContext } from './SystemAlert'
import useFetchError from '../hooks/useFetchError'

interface PlatformSelectorProps {
  selectedPlatformId?: number,
  setSelectedPlatform:  (id: number | undefined) => void
}

const PlatformSelector = ( {selectedPlatformId, setSelectedPlatform} : PlatformSelectorProps ) => {

  const {data, error, isFetching} = usePlatforms();

  const {dispatch: alertDispatcher} = useContext(SystemAlertContext)

  useFetchError({ error, alertDispatcher, info: "Platform selection will not be available", group: "PS"});

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