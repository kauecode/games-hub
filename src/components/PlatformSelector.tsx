import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import usePlatform from '../hooks/usePlatform'
import { useContext } from 'react'
import { SystemAlertContext } from './SystemAlert'
import useFetchError from '../hooks/useFetchError'
import useQueryStore from '../stores/queryStore'

const PlatformSelector = () => {
  
  const selectedPlatformId = useQueryStore(s => s.gameQuery.selectedPlatformId);
  const selectedPlatform = usePlatform(selectedPlatformId)

  const setPlatformId = useQueryStore(s => s.setPlatformId);

  const {data, error, isFetching} = usePlatforms();
  const {dispatch: alertDispatcher} = useContext(SystemAlertContext)

  useFetchError({ error, alertDispatcher, info: "Platform selection will not be available", group: "PS"});

  if (error) return null

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown tabIndex={-1}/>}>
      {selectedPlatform?.name || "Select Platform"}
      </MenuButton>
      <MenuList>
          <MenuItem 
            onClick={() => setPlatformId(undefined)}>
            All Platforms
            </MenuItem>        
          {data?.results.map((platform) => 
            <MenuItem 
              onClick={() => setPlatformId(platform.id)} 
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