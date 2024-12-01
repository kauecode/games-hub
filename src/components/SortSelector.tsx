import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

interface SortSelectorProps {
  sortOrder: (order: string | null) => void
  selectedOrder: string | null
}

const SortSelector = ( {sortOrder, selectedOrder} : SortSelectorProps ) => {

  const sortOptions = [
    { value: null, label: "Revelance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ]

  const currentSortOrder = sortOptions.find(item => item.value === selectedOrder)?.label

  return (
    <>
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
      Sort By: {currentSortOrder || "Revelance"}      
      </MenuButton>
      <MenuList>
        {sortOptions.map((item, index) => <MenuItem key={index} onClick={() => sortOrder(item.value)}>{item.label}</MenuItem>)}
      </MenuList>
    </Menu>
    </>
  )
}

export default SortSelector

//Available fields: name, released, added, created, updated, rating, metacritic. 
// You can reverse the sort order adding a hyphen, for example: -released.