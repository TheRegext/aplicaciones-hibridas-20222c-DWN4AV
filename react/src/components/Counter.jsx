// componentes funcionales
// hooks
import { useState } from 'react'
import './Counter.css'


function Counter(props) {
    const [count, setCount] = useState(0)

    const incrementar = () => {
        if (count < props.max) {
            setCount(count + 1)
        }
    }

    const decrementar = () => {
        if (count > props.min) {
            setCount(count - 1)
        }
    }

    return (
        <div className="Counter">
            <p>{props.min} / {props.max}</p>
            <button onClick={decrementar}>-</button>
            <label>{count}</label>
            <button onClick={incrementar}>+</button>
        </div>
    )
}

export default Counter