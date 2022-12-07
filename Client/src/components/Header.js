import { Stack, useMediaQuery,Circle,Flex,Spacer,Text ,Box, VStack,HStack ,Select } from '@chakra-ui/react'
import React from 'react'
import Success from './Success'
import Test from './Test'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'
function Header() {
  const [isLargerThan600] = useMediaQuery('(min-width: 600px)')

  return (
    
      <HStack spacing={'100px'} >
        
    <Box p={'4'}><h1>world of hayatt</h1></Box>
  <Box bg={'white'}>
  <Select placeholder='Explore' borderColor={'white'}>
  <option value='option1'>Option 1</option> 
  <option value='option2'>Option 2</option>
 
</Select>

</Box>
<Box>
<Breadcrumb separator=''>
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Offers</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Meetings&Events</BreadcrumbLink>
  </BreadcrumbItem>

</Breadcrumb>
</Box>
 <Box>
 <Select placeholder='Explore' borderColor={'white'}>
  <option value='option1'>Option 1</option> 
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
 </Box>

      </HStack>
  
     
  )
}

export default Header
 