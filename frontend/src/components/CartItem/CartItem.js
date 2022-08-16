import React, { useState } from 'react'

export const CartItem = (props) => {
    const [count, setCount] = useState(props.qty);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    if(count > 1){
        setCount(prevCount => prevCount - 1);
    }
  };
  return (
    <div className='row my-4'>
        <div className="col-md-4 px-4 py-4">
            {props.productname}
        </div>
        <div className="col-md-4 px-4 py-4">
            <div className="row">
                <div className="col-md-4 text-end">
                <button className='btn btn-dark' onClick={handleDecrement}>
                    -
                </button>
                </div>
                <div className="col-md-4">
                    <form action="">
                        <input type="text" value={count} className='form-control' readOnly />
                    </form>
                </div>
                <div className="col-md-4 text-left font-big">
                    <button className='btn btn-dark' onClick={handleIncrement}>+</button>
                </div>
            </div>
        </div>
        <div className="col-md-4 px-4 py-4">Rs. {props.productprice * count}</div>
    </div>
  )
}
