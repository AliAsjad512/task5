import { useReducer } from 'react';

const initialState = {
  count: 0,
  numChange: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return {
        ...state,
        count: state.count + state.numChange,
      };
    case 'DEC':
      return {
        ...state,
        count: state.count - state.numChange,
      };
    case 'ChangeNumTo':
      return {
        ...state,
        numChange: action.payload,
      };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeInput = (e) => {
    dispatch({ type: 'ChangeNumTo', payload: parseInt(e.target.value, 10) });
  };

  return (
    <div className="App">
      <pre className="rainbow box text-center">Value {state.count}</pre>
      <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({ type: 'INC' })}>
          <span className="huge">+</span>INC by {state.numChange}
        </button>
        <button className="button-box" onClick={() => dispatch({ type: 'DEC' })}>
          <span className="huge">-</span>DEC by {state.numChange}
        </button>
      </div>
      <p className="flex gap center">
        <label className="button-box" htmlFor="number">
          Number to INC/DEC by{' '}
        </label>
        <input
          className="input-box"
          onChange={handleChangeInput}
          type="number"
          value={state.numChange}
          name="number"
          id="number"
        />
      </p>
    </div>
  );
};

export default Counter;