import { useState } from "react"
import './counter.css'

const Counter = () => {


    const [count, setCount ] = useState(0)
    const [active, setActive] = useState(false)


    const toggleModal = () => {
        setActive(!active);
        console.log('cliced');
    }



    const increment = () => {
        setCount ( count + 1 )
    }

    const decrement = () => {
        setCount ( count - 1)
    }

    

    console.log(count)

    return(
        <div className="box">
            

        <div className="container">
        <div className="block">
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>

            </div>


            <button onClick={toggleModal}>Modal Btn</button>

            <div className={active ? 'modal' : ''}>
                
            </div>
        </div>


        </div>


    )


}

export default Counter