import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const Nav = () => {




    return (
        <Container>
            <Link to='/' style={{
                color: 'whitesmoke',
                textDecoration: 'none'
            }}>
                <h1>Food Shop</h1>
            </Link>


            <Link to='/cart' style={{ color: 'white' }}>
                <Icon>
                    <FaShoppingCart
                        style={{ width: '30px', height: '30px', position: 'relative' }}
                    />
                    <div style={{
                        width: '18px',
                        backgroundColor: 'red',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        fontSize: '13px',
                        textAlign: 'center',
                        position: 'absolute',
                        top: 10,
                        right: 330,
                    }}>
                        0
                    </div>
                </Icon>
            </Link>
        </Container>
    )
}

export default Nav
const Container = styled.div`
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: salmon;
    color: white;
`
const Icon = styled.div``