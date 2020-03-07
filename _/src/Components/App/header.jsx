import React from "react";

import './header.scss';

export const Header = (props) => {

    return (
        <div class="topnav">
            <a class="button" href="#home">Home</a>
            <a class="button" href="#about">About</a>
            <a class="button" href="#contact">Contact</a>
            <div class="login-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Password" name="psw" />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

Header.displayName = "Header"