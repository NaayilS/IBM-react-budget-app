import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: parseInt(event.target.value),
        });
    };

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
    };

    return (
        <div className='alert alert-secondary d-flex justify-content-between align-items-center'>
            <div>
                <span>Budget:</span>
                <div className="input-group" style={{ marginLeft: '10px', width: '200px' }}>
                    <div className="input-group-prepend">
                        <span className="input-group-text">{currency}</span>
                    </div>
                    <input 
                        type="number" 
                        step="10" 
                        value={newBudget} 
                        onChange={handleBudgetChange}
                        className="form-control"
                    />
                </div>
            </div>
            <div className="input-group mb-3" style={{ marginLeft: '10px' }}>
                <div className="input-group-prepend">
                    <label className="input-group-text" htmlFor="currencySelect">Currency</label>
                </div>
                <select 
                    className="custom-select" 
                    id="currencySelect" 
                    value={currency} 
                    onChange={handleCurrencyChange}
                    style={{ backgroundColor: '#B2FF9E', color: '#000' }}
                >
                    <option value="£">£ Pound</option>
                    <option value="$">$ Dollar</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;
