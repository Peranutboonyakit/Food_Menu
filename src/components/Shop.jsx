import React from 'react'
import styled from 'styled-components'

const Shop = () => {

    return (
        <Container>
            <ContentBox>
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>Shop</h1>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <h4>กะเพราไก่ไข่ดาว</h4>
                        <h4>฿50</h4>
                        <h4>จำนวน</h4>
                    </div>
                </Menu>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                        <h4>กะเพราไก่ไข่ดาว</h4>
                        <h4>฿50</h4>
                        <h4>จำนวน</h4>
                    </div>
                </Menu>


                <Button>
                    <button>add to cart</button>
                </Button>
            </ContentBox>
        </Container>
    )
}

export default Shop
const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentBox = styled.div`
   width: 50%;
   height: 350px;
   border-radius: 30px;
   box-shadow: 0px 2px 10px salmon;
   padding: 20px;
   display: flex;
   flex-direction: column;
   justify-content: space-around;
`
const Menu = styled.div`
  border: 1px solid red;
  padding: 10px;
  
`
const Button = styled.button`
    display: flex;
    justify-content: end;
    background: #fff;
    border: none;
    button{
            cursor: pointer;
            padding: 10px;
            border-radius: 20px;
            display: flex;
            border: 1px solid green;
            color: white;
            background-color: green;
    }
`