import React, { useContext } from 'react';
import { TiDelete, TiDeleteOutline, TiDocumentDelete, TiMinus, TiPlug, TiPlus, TiPlusOutline, TiUserDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';


const circularStyle = {
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    color: "white"
}

const increasIconStyle = {
    ...circularStyle,
    backgroundColor: '#4FAC5C'
}

const decreaseIconStyle = {
    ...circularStyle,
    backgroundColor: '#AF2419'
}

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><TiPlus style={increasIconStyle} onClick={() => increaseAllocation(props.name)}></TiPlus></td>
        <td><TiMinus style={decreaseIconStyle} onClick={() => decreaseAllocation(props.name)}></TiMinus></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
