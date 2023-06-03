import React from 'react';
import { City } from "./City";
import { BanknotsType, MoneyType } from "./App";
import styled from 'styled-components';

type CountryPropsType = {
    data: MoneyType[]
    setFilterValue: (filterValue: BanknotsType) => void
}

export const Country = (props: CountryPropsType) => {
    const setAll = () => {
        props.setFilterValue('All')
    }

    const setDollars = () => {
        props.setFilterValue('Dollars')
    }

    const setRUBLS = () => {
        props.setFilterValue('RUBLS')
    }

    return (
        <div>
            <MyButton onClick={setAll}>All</MyButton>
            <MyButton onClick={setDollars}>Dollars</MyButton>
            <MyButton onClick={setRUBLS}>RUBLS</MyButton>
            {/* <ButtonAll>salam</ButtonAll> */}
            <City data={props.data} />
        </div>
    );
};

const MyButton = styled.button`
    margin: 10px;
    width: 150px;
    border: 0px;
    border-radius: 20px;
    color: #4e4444;
    font-weight: 900;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #9e9ee2;
    :hover{
        background-color: #967a7a;
    }
`