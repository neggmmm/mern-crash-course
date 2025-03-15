import { Button, Container, Flex, HStack, Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import { IoMoon } from "react-icons/io5";
// import { LuSun } from "react-icons/lu";

function Navbar() {
    // const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
        <Flex
        height="16"
        align = "center"
        justify = "space-between"
        direction ={{
            base:"column", 
            sm:"row",
        }}
        >
            <Text
            css={{ "--font-size": { base: "18px", lg: "24px" } }}
            fontWeight={"bold"}
            align={"center"}
            bgGradient= "to-r"
            gradientFrom="cyan.400" 
            gradientTo="blue.500"
            bgClip={"text"}
            >
               <Link to={"/"}>NEGM</Link>
            </Text>

            <HStack  align={"center"}>
                <Link to={"/create"}>
                <Button>
                   +
                </Button>
                </Link>
                {/* <Button onClick={toggleColorMode}>
						{colorMode === "light" ? <IoMoon /> : <LuSun size='20' />}
					</Button> */}
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar
