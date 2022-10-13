import React from "react";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });
            setAccounts(accounts);
        }
    };

    return(
        <nav>
            {/* Left side of the navbar */}
            <div>Twitter</div>
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
        </nav>
    );
};

export default NavBar