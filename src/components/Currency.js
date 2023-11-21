import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Select from 'react-select';


const currencyOptions = [
    {value: '$', label: '$ Dollar'},
    {value: '£', label: '£ Pound'},
    {value: '€', label: '€ Euro'},
    {value: '₹', label: '₹ Ruppee'},
]

const style = {
    container: (defaultStyles) => ({
        ...defaultStyles,
        width: 'max-content',
        minWidth: '200px'

    }),
    option: (defaultStyles, state) => ({
        ...defaultStyles,
        backgroundColor: state.isFocused ? "#F9FAFC" : "#93E499",
    }),
    control: (defaultStyles) => ({
        ...defaultStyles,
        backgroundColor: '#94E499',
        border: 0,
        boxShadow: 'none'
    }),
    singleValue: (defaultStyles) => ({
        ...defaultStyles,
        color: '#fff',

    }),
    menuList: (defaultStyles) => ({
        ...defaultStyles,
        border: '1px solid #257E2B',
        borderRadius: 4,
        padding: 0
    })
}

const Currency = () => {

    const { dispatch, currency } = useContext(AppContext);

    const selected = currencyOptions.find(option => option.value === currency);

    console.log(selected);
    const handleCurrencyChanged = (currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency.value
        })
        
    }
    return (
        <div>
        <Select styles={style} options={currencyOptions} value={{label: `Currency (${selected.label})`}} onChange={handleCurrencyChanged} autoFocus={true}>
        </Select>
    </div>
    );

}

export default Currency;