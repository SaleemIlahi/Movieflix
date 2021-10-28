import React from 'react'
import { Link } from 'react-router-dom'
import './Home.scss'
import logo from '../../logo.svg'

const Home = () => {
    return (
        <div className="container">
            <header>
                <nav>
                    <img src={logo} alt="logo" />
                    <button>Sign in</button>
                </nav>
            </header>
            <div className="text-section">
                <h1>Unlimited movies, TV shows and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <form className="input-section">
                    <input type="email" placeholder="Email Address" required />
                    <button>
                        <Link to="/Page">Get Started</Link>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Home