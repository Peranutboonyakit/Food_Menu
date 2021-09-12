import React from 'react'
import styled from 'styled-components'
import { MyModal } from '../components/Modal'
import { ContentBox } from './Shop'
import { useSelector } from 'react-redux'
import { useState } from 'react'

const Cart = () => {

    const [modalShow, setModalShow] = useState(false)
    const [dataModal, setDataModal] = useState({})
    const cart = useSelector(state => state)
    console.log(cart);

    const handleModal=(item)=>{
        setModalShow(true)
        setDataModal(item)
    }

    return (
        <Container>
            {cart.cart.length <= 0 ? <h3>NO ITEMS IN YOUR CART</h3>
                :
                <ContentBox2>
                    <h1 style={{
                        textAlign: 'center',
                        marginBottom: '2rem'
                    }}
                    >Order</h1>

                    {cart.cart.map(item => {
                        return <ShowOrder
                            key={item.shopId}
                            onClick={() => handleModal(item)}>
                            <p>{item.shopName}</p>
                            <p>{item.date}</p>
                        </ShowOrder>
                    }
                    )
                    }
                    <MyModal show={modalShow} onHide={() => setModalShow(false)} cart={dataModal} />
                </ContentBox2>
            }
        </Container >
    )
}

export default Cart
const Container = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
const ContentBox2 = styled(ContentBox)`
    height: auto;
    width: 70%;
    padding: 40px;
`

const ShowOrder = styled.div`
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
    p{
        font-size: 19px;
        padding: 5px;
    }
    &:hover{
      background-color: rgba(255, 99, 71, 0.3);
      border-bottom: 2px solid rgba(255, 191, 0, 0.5);
    }
`