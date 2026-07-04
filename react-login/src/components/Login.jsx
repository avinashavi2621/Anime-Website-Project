import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage({ type: '', text: '' });

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('Login submitted:', { email, password });
            setMessage({ type: 'success', text: 'Login successful! Redirecting to home page...' });
            
            // Save login state to localStorage
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userEmail', email);

            // Redirect to the anime website home page
            setTimeout(() => {
                window.location.href = './animewebsite.html';
            }, 1500);
        } catch (error) {
            setMessage({ type: 'error', text: 'Login failed. Please check your credentials.' });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>AnimeVerse</h1>
                    <p>Enter your credentials to access your Anime Hub</p>
                </div>
                
                {message.text && (
                    <div className={`status-message ${message.type}`}>
                        {message.text}
                    </div>
                )}

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="name@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <div className="label-row">
                            <label htmlFor="password">Password</label>
                            <a href="#" className="forgot-password">Forgot password?</a>
                        </div>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button" disabled={isLoading}>
                        {isLoading ? <div className="spinner"></div> : 'Sign In'}
                    </button>
                    
                    <div className="divider">
                        <span>or continue with</span>
                    </div>

                    <div className="social-login">
                        <button type="button" className="social-button">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" />
                            Google
                        </button>
                        <button type="button" className="social-button">
                            <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" />
                            GitHub
                        </button>
                    </div>

                    <p className="signup-link">
                        Don't have an account? <a href="#">Create one now</a>
                    </p>
                </form>
            </div>
            <div className="bg-blobs">
                <div className="blob one"></div>
                <div className="blob two"></div>
                <div className="blob three"></div>
            </div>
        </div>
    );
};

export default Login;
