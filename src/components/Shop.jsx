import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router'
import styled from 'styled-components'


const Shop = (props) => {
console.log(props)
    const [shop, setShop] = useState({})
    const [count, setCount] = useState('')
    const [count2, setCount2] = useState('')
    const [countItem, setCountItem] = useState(0)
    let params = useParams();
    
    async function getDataById() {
        let request = await fetch("http://localhost:3004/data/" + params.shopId)
        let res = await request.json();
        setShop(res)
    }

    useEffect(() => {
        getDataById();
    }, [])

    return (
        <Container>
            <ContentBox>
                <h1 style={{ marginBottom: '20px', textAlign: 'center' }}>{shop.shop}</h1>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{shop.menu1?.food}</h4>
                        <h4>฿{shop.menu1?.price}</h4>

                        <div style={{ display: 'flex' }}>
                            <input onChange={(e) => setCount(e.target.value)} value={count} placeholder="0" />
                            {/*<button onClick={decrement} style={{ border: 'none', backgroundColor: 'white' }}>-</button>
                            <h4 style={{ margin: '0 9px' }}>{count}</h4>
                            <button onClick={increment} style={{ border: 'none', backgroundColor: 'white' }}>+</button>*/}
                        </div>
                    </div>
                </Menu>
                <Menu>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h4>{shop.menu2?.food}</h4>
                        <h4>฿{shop.menu2?.price}</h4>

                        <div style={{ display: 'flex' }}>
                            <input onChange={(e) => setCount2(e.target.value)} value={count2} placeholder="0" />
                        </div>
                    </div>
                </Menu>

                <h4 style={{ textAlign: 'end' }}>Total : ฿ {(shop.menu1?.price * count) + (shop.menu2?.price * count2)}</h4>

                <Button>
                    <button>Order now</button>
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
  padding: 10px;
  button{
      cursor: pointer;
  }
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
            border: 1px solid green;
            color: white;
            background-color: green;
    }
`