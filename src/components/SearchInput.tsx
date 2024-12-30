import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { IoCloseCircle } from 'react-icons/io5'
import useQueryStore from '../stores/queryStore'

const SearchInput = () => {

  const setSearchText = useQueryStore(s => s.setSearchString);
  const searchString = useQueryStore(s => s.gameQuery.searchString);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInputRef.current && searchInputRef.current.value) {
      setSearchText(searchInputRef.current.value)
    }
  }

  const handleClearSearch = () => {
    setSearchText("");
    if (searchInputRef.current) searchInputRef.current.value = "";
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input ref={searchInputRef} borderRadius={20} placeholder='Type a game name and press [enter] to search...' variant='filled' />
        {searchString &&
        <Button       
          position="absolute"
          right="0"
          variant='ghost'
          marginLeft={2}   
          paddingX={0}
          fontSize={'small'}
          borderRadius="full"
          aria-label="Clear Search"
          onClick={handleClearSearch}
          >
            <IoCloseCircle fontSize={20}/>
        </Button>
        }         
      </InputGroup>
    </form>
  )
}

export default SearchInput