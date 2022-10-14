import React from "react";
import { Box, Button, Flex, Image, Link, Spacer } from "@chakra-ui/react"
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

    return(
        <Flex justify="space-between" align="center" padding="30px">
            
            {/* Left side of the navbar */}
            <Link href="https://twitter.com/webdevgaur" target="_blank" rel="noopener noreferrer">
                <AiFillTwitterCircle className="link-icon twitter" />
            </Link>
            <div>YouTube</div>
            <div>LinkedIn</div>
            <div>Email</div>

            {/* Right side of the navbar */}
            <div>About</div>
            <div>Mint</div>
            <div>Team</div>

            {/* Connect wallet */}
            {isConnected ? (
                <p>Connected 👍</p>
            ) : (
                <button onClick={connectAccount}>Connect 🤝</button>
            )}
           
        </Flex>
    );
};

export default NavBar