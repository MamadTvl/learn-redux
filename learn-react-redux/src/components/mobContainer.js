import React from 'react'
import {connect} from 'react-redux'
import {buyMob} from '../redux/index'

const MobContainer = (props) => {
    return (
        <div>
            <h1>Number of Mobiles - {props.numberOfMobs}</h1>
            <button onClick={props.buyMob}>Buy</button>
        </div>
    )
}
// read selector in redux to define this functions in another files
const mapStateToProps = (state) => {
    return {
        numberOfMobs: state.numberOfMobs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyMob: () => dispatch(buyMob())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MobContainer)
