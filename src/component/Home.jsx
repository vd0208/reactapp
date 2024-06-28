import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation
import pastaCarbonaraImage from '../images/pasta-carbonara.jpg';
import chocolateCakeImage from '../images/chocolate-cake.jpg';
import chickenCurryImage from '../images/chicken-curry.jpg';

// Sample recipe data with imported images
const recipes = [
    { id: 1, title: 'Pasta Carbonara', image: pastaCarbonaraImage },
    { id: 2, title: 'Chocolate Cake', image: chocolateCakeImage },
    { id: 3, title: 'Chicken Curry', image: chickenCurryImage }
    // Add more recipes with their respective imported images
];

const Home = () => {
    const cardStyle = {
        position: 'relative',
        width: '250px',
        height: '200px',
        margin: '10px',
        overflow: 'hidden',
        borderRadius: '5px',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.5s ease'
    };

    const parallaxStyle = {
        position: 'relative',
        height: '100%',
        overflow: 'hidden'
    };

    const imageStyle = {
        width: '100%',
        height: 'auto',
        transform: 'scale(1.2)', /* Adjust the scale factor as needed */
        transition: 'transform 0.5s ease'
    };

    const contentStyle = {
        position: 'absolute',
        bottom: '0',
        left: '0',
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: '10px',
        textAlign: 'center',
        transition: 'background-color 0.3s ease'
    };

    const titleStyle = {
        margin: '0',
        fontSize: '1.2rem',
        color: '#333'
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '10px 20px',
        fontSize: '1.2rem',
        backgroundColor: 'transparent',
        color: '#333',
        textDecoration: 'none',
        border: '2px solid #333',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
       
    };

    const buttonHoverStyle = {
        backgroundColor: '#333',
        color: '#fff',
        transform: 'scale(1.1)', // Scale up on hover for parallax effect
        borderColor: '#fff' // Change border color on hover
    };

    const parallaxLayerStyle = {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        transform: 'translateY(10%)', // Initial parallax effect
        transition: 'transform 0.3s ease'
    };

    return (
        <div className="home" style={{ padding: '20px' }}>
            <div className="hero" style={{ textAlign: 'center', marginBottom: '40px', padding: '40px 20px', backgroundColor: '#f2f2f2', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to Recepeeees!</h1>
                <p style={{ fontSize: '1.5rem', color: '#666' }}>Explore delicious recipes from around the world.</p>
            </div>
            <div className="recipe-list" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                {recipes.map(recipe => (
                    <div key={recipe.id} className="recipe-card" style={cardStyle}>
                        <div className="parallax" style={parallaxStyle}>
                            <img src={recipe.image} alt={recipe.title} style={imageStyle} />
                        </div>
                        <div className="content" style={contentStyle}>
                            <h2 style={titleStyle}>{recipe.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
            {/* Button to More Recipes */}
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <Link
                    to="/Morerep"
                    className="more-recipes-button"
                    style={buttonStyle}
                    onMouseEnter={e => e.target.style = {...buttonStyle, ...buttonHoverStyle}}
                    onMouseLeave={e => e.target.style = buttonStyle}
                >
                    <div style={parallaxLayerStyle}>
                        More Recipes
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Home;
