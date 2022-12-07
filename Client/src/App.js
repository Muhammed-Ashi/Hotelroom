import React from "react";
import {Link} from 'react-router-dom'
import {Flex,VStack,Heading,HStack,IconButton,Spacer} from '@chakra-ui/react'
import { FaSun,FaMoon,FaInstagram,FaGithub,FaLinkedin } from 'react-icons/fa';

import {BrowserRouter, Route, Routes } from 'react-router-dom'

import { useColorMode } from "@chakra-ui/react";
import Header from "./components/Header";


// We import all the components we need in our app

const App = () => {

    return (
      
     <Header/>
    
    )
};
 
export default App;