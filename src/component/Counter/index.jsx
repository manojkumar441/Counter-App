import {useState} from 'react'
import './index.css'
const Counter =()=>{
    const [count, setcount] = useState(0)
    const onClickDecrease =()=>{
        setcount(prev =>prev-1)
    }
    const onClickIncrease = ()=>{
        setcount(prev => prev+1)
    }
    const onClickReset =() =>{
        setcount(0)
    }
    return(<div className='main-container'>
        <div className='card'>
            <h1>Counter App</h1>
            <p>Click the button increase or decrease the count. </p>
            <div className='scoreboard'><h1 className='value'>{count}</h1></div>
            <div className='btn-container'>
                <button onClick={onClickDecrease} className='btn b1'>- Decrease</button>
                <button onClick={onClickIncrease} className='btn b2'>+ Increase</button>
                <buttton onClick={onClickReset} className='btn b3'> Reset</buttton>
            </div>
        </div>
    </div>);
}
export default Counter