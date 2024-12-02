import { Button, Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'
import { GameQuery } from '../App'
import { IoCloseCircle } from 'react-icons/io5'

interface SearchInputProps {
  onSearch: (s:string) => void,
  gameQuery: GameQuery
}

const SearchInput = ({onSearch, gameQuery} : SearchInputProps) => {

  const searchValue = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.current && searchValue.current.value) {
      onSearch(searchValue.current.value)
    }
  }

  const handleClearSearch = () => {
    onSearch("");
    if (searchValue.current) searchValue.current.value = "";
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input ref={searchValue} borderRadius={20} placeholder='Type a game name and press [enter] to search...' variant='filled' />
        {gameQuery.search &&
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