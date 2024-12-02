import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface SearchInputProps {
  onSearch: (s:string) => void
}

const SearchInput = ({onSearch} : SearchInputProps) => {

  const searchValue = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.current && searchValue.current.value) {
      onSearch(searchValue.current.value)
    }
  }

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <InputGroup>
        <InputLeftElement children={<BsSearch/>} />
        <Input ref={searchValue} borderRadius={20} placeholder='Type a game name and press [enter] to search...' variant='filled' />
      </InputGroup>
    </form>
  )
}

export default SearchInput