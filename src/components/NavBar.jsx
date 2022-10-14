import React from "react";
import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react"
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin, AiFillMail } from "react-icons/ai";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        } else {
            alert('Crypto wallet not installed. Install metamask.');
        }
    };

    const fakeClickHandler = () => {
        alert('This is just a fake link for now. Sorry :(');
    } 

    return(
        <Flex justify="space-between" align="center" padding="30px">
            
            {/* Left side of the navbar */}
            <Flex justify="space-around" width="40%" padding="0 75px">
                <Link href="https://twitter.com/webdevgaur" target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle className="link-icon twitter" />
                </Link>
                <Link href="https://www.youtube.com/c/anurag2402" target="_blank" rel="noopener noreferrer">
                    <AiFillYoutube className="link-icon youtube" />
                </Link>
                <Link href="https://www.linkedin.com/in/webdevgaur/" target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin className="link-icon linkedin" />
                </Link>
                <Link href="mailto:anuraggaur495@gmail.com?subject = Hi Anurag" target="_blank" rel="noopener noreferrer">
                    <AiFillMail className="link-icon email" />
                </Link>
            </Flex>

            {/* Right side of the navbar */}
            <Flex justify="space-around" width="40%" padding="0 30px" align="center">
                <Box margin="0 15px"><a  onClick={fakeClickHandler} href="#">About</a></Box>
                <Spacer />
                <Box margin="0 15px"><a  onClick={fakeClickHandler} href="#">Mint</a></Box>
                <Spacer />
                <Box margin="0 15px"><a  onClick={fakeClickHandler} href="#">Team</a></Box>
                <Spacer />
                {/* Connect wallet */}
                {isConnected ? (
                    <Box margin="0 15px">Connected 👍</Box>
                ) : (
                    <Button
                     onClick={connectAccount}
                     backgroundColor="deepskyblue"
                     borderRadius="5px"
                     boxShadow="0px 2px 2px 1px #0F0F0F"
                     color="white"
                     cursor="pointer"
                     fontFamily="inherit"
                     padding="15px"
                     margin="0 15px"
                     >Connect 🤝</Button>
                )}
            </Flex>

            
           
        </Flex>
    );
};

export default NavBar