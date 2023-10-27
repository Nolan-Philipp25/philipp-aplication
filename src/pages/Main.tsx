import React from 'react'
import Image from 'react-bootstrap/Image';
import Button  from '../components/Button';
import { useNavigate } from 'react-router-dom';

function Main() {
    const navigate = useNavigate();
    const clickHandler = (id: string) => navigate('/users');

return (
    <div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '94vh', alignItems: 'center'}}>
            <h1 style={{zIndex: 5, color: 'white', fontSize: '9rem', fontWeight: 'bolder'}}>Hello</h1 >
            <Button onClick={clickHandler} variant='light' content='Get started' size="lg" />
        </div>
        <Image style={{overflow: 'hidden', maxHeight: '100vh', width: '100%', position: 'absolute', top: 0, zIndex: -5, background: 'black', opacity: '1' }} src='../../city.jpg' fluid />
    </div>
)
}
export default Main;