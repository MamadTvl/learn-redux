import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {buyMob} from "../redux/index";
// so simple
export default function HooksContainer() {
    const numberOfMobs = useSelector((state) => {
        return state.numberOfMobs
    })
    const dispatch = useDispatch()
    React.useEffect(() => {
        console.log(numberOfMobs)
    }, [numberOfMobs])

    return (
        <div>
            <h1>Number of Mobs - hook {numberOfMobs}</h1>
            <button onClick={() => dispatch(buyMob())}>buy</button>
        </div>
    )
}
