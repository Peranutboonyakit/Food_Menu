import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { useParams } from 'react-router'
import styled from 'styled-components'
import { orderNow } from '../redux/carttSlice'


const Shop = () => {

    const [shop, setShop] = useState({})
    const [count, setCount] = useState('')
    const [count2, setCount2] = useState('')
    let params = useParams();
    console.log(shop);

    async function getDataById() {
        let request = await fetch("http://localhost:3004/data/" + params.shopId)
        let res = await request.json();
        setShop(res)
    }

    useEffect(() => {
        getDataById();
    }, [])

    const dispatch = useDispatch()

    const checkAdd = () => {
        if (count.length === 0 && count2.length === 0) {
            alert("No item")
        } else {
            alert(" Your order added ")
        }
    }

    return (
        <Container>
            <ContentBox>
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>{shop.shop}</h1>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{shop.menu1?.food}</h4>
                        <h4>฿{shop.menu1?.price}</h4>

                        <div style={{ display: 'flex' }}>
                            <input onChange={(e) => setCount(e.target.value)} value={count} placeholder="0" type='number' />
                        </div>
                    </div>
                </Menu>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{shop.menu2?.food}</h4>
                        <h4>฿{shop.menu2?.price}</h4>
                        <div style={{ display: 'flex' }}>
                            <input onChange={(e) => setCount2(e.target.value)} value={count2} placeholder="0" type='number' />
                        </div>
                    </div>
                </Menu>

                <h4 style={{ textAlign: 'end' }}>Total : ฿ {(shop.menu1?.price * count) + (shop.menu2?.price * count2)}</h4>

                <Button>
                    <button onClick={() => dispatch(
                        orderNow({
                            shopId: shop.id,
                            shopName: shop.shop,
                            date: Date(),
                            count: count,
                            count2: count2,
                            menu1: shop.menu1.food,
                            menu2: shop.menu2.food
                        }), checkAdd(), setCount(''), setCount2('')
                    )}
                    >Order now</button>
                </Button>
            </ContentBox>
        </Container >
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
export const ContentBox = styled.div`
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
  padding: 10px;
  input{
    outline: none;
    border: 1px solid salmon;
    text-align: center;
    width: 70px;
    border-radius: 13px;
  }
  `
const Button = styled.div`
    display: flex;
    justify-content: end;
    background: #fff;
    border: none;
    button{
            cursor: pointer;
            padding: 10px;
            border-radius: 20px;
            display: flex;
            border: 0px solid green;
            color: white;
            background-color: green;

        &:hover{
            background-color: #0ea00e;
        }
    }
`