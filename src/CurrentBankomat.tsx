import React from 'react';
import { MoneyType } from "./App";
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    return (
        <Banknote color={props.money.banknotes === 'Dollars' ? 'palegreen' : 'cadetblue'}>
            <Name>{props.money.banknotes}</Name>
            <Nominal>{props.money.value}</Nominal>
        </Banknote>
    );
};

const Banknote = styled.div`
    background-color: ${props => {
        return props.color;
    }};
    width:400px;
    height:200px;
    margin:10px;
`
const Name = styled.div`
display: flex;
justify-content: center;
font-size: 30px;
margin-top: 30px;
`
const Nominal = styled.div`
    display: flex;
    justify-content: center;;
    font-size: 90px
`