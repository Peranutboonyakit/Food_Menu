import React, { useState } from 'react'
import styled from 'styled-components'
import data from '../data'

const ListShop = () => {

    const [searchInput, setSearchInput] = useState('')
    const [dataFilter] = useState(['shop', 'listMenu'])

    const searchMenu=(menus)=>{
        return menus.filter((menu)=>{
            return dataFilter.some((filter)=>{
                return menu[filter].includes(searchInput)
            })
        })
    }

    return (
        <Container>
            <Input
                value={searchInput}
                onChange={(e) => { setSearchInput(e.target.value) }}
                placeholder='Search Restaurants or Menus'
            />
            
            <ContainerMenu>
                {searchMenu(data).map((item, index) => {
                    return (
                        <CardBox key={index}>
                            <Content>
                                <img src={item.image} alt={item.shop}/>
                                <div className='desc'>
                                    <h3>{item.shop}</h3>
                                    <div>
                                       <p>{item.listMenu+''}</p>
                                    </div>
                                </div>
                            </Content>
                        </CardBox>
                    );
                })}
            </ContainerMenu>
        </Container>
    )
}

export default ListShop

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Input = styled.input`
    margin-bottom: 20px;
    padding: 15px;
    border-radius: 10px;
    border:0 solid salmon;
    outline: none;
    width: 50%;
    box-shadow: 1px 1px 5px salmon;
    font-size: 15px;
`
/////////////////////////////////////////  Shop List

const ContainerMenu = styled.div`
    width: 100%;
    height: 100%;
   display: grid;
   grid-template-columns: auto auto;
   justify-items: center;
`
const CardBox = styled.div`
    margin-bottom: 20px;
    width: 350px;
    height:auto; 
    display: flex;
    justify-content: center;
    border: 1px solid salmon;
    border-radius: 30px;
    box-shadow: 5px 5px 10px salmon;
    overflow: hidden;
`
const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 100%;
        height: 170px;
    }
    .desc{
        display: flex;
        align-items: center;
        flex-direction: column;
    }
`