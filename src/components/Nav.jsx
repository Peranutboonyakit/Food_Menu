import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Nav = () => {

    const cart = useSelector(state=> state.cart)

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