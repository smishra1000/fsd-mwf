import React from "react";

class HeaderBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <h1>MyLogo</h1>
                <ul>
                    <li>Home</li>
                    <li>Aboutus</li>
                    <li>contactus</li>
                </ul>
            </div>
        )
    }
}

export default HeaderBar