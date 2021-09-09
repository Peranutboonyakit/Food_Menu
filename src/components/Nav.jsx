import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

const Nav = () => {
    return (
        <Container>
            <h1>Food Shop</h1>

            <Icon >
                <FaShoppingCart
                    style={{ width: '30px', height: '30px'}}
                />
            </Icon>
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
const Icon = styled.div`
    
`