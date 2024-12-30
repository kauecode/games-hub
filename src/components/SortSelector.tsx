import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import useQueryStore from '../stores/queryStore';

const SortSelector = () => {

  const setSortOrder = useQueryStore(s => s.setSortOrder);
  const selectedSortOrder = useQueryStore(s => s.gameQuery.selectedSortOrder);

  // You can reverse the sort order adding a hyphen, for example: -released.
  const sortOptions = [
    { value: undefined, label: "Revelance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ]

  const currentSortOrder = sortOptions.find(item => item.value === selectedSortOrder)?.label

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown tabIndex={-1}/>}>
      Sort By: {currentSortOrder || "Revelance"}      
      </MenuButton>
      <MenuList>
        {sortOptions.map((item, index) => 
          <MenuItem key={index} onClick={() => setSortOrder(item.value)}>{item.label}</MenuItem>
        )}
      </MenuList>
    </Menu>
    </>
  )
}

export default SortSelector