import React, {useState, useEffect} from 'react'

const CounterFunc = (props) => {
    // so useEffect is called on mount componentDidMount
    // and called on state update componentDidUpdate

    // we been using in this[] which makes it only called
    // on mount
    useEffect(()=>{
        console.log('useEffect called')
        if(count > 10) {
            setCount(0)
        }
        // return function will be called on umount
        return ()=> {
            console.log('unmounted')
        }
    })
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>{props.name ? props.name : 'Counter'}</h1>
            <p>{count}</p>
            <button onClick={()=> setCount(count +1)}>add</button>
            <button onClick={()=> setCount(count -1)}>minus</button>
        </div>
    )
}
export default CounterFunc