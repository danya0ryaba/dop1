import React from 'react';
import { CurrentBankomat } from "./CurrentBankomat";
import { MoneyType } from "./App";
import styled from 'styled-components';

type CityPropsType = {
    data: MoneyType[]
}

export const City = (props: CityPropsType) => {

    const mappedMoney = props.data.map((elem, index) => {
        return (
            <CurrentBankomat
                key={index}
                money={elem}
            />
        )
    })
    return (
        <div>
            <Wrapper>{mappedMoney}</Wrapper>
        </div>
    )
};


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 30px;
`