import React from 'react';
import { connect } from 'react-redux'

import { setLanguage } from '../redux/actions/langActions'
import RegisterPanel from '../components/RegisterPanel'


class Login extends React.Component {


    componentDidMount() {
        console.log("login page did mount : ", this.props)
    }

    render() {
        console.log("login page props : ", this.props)
        return (
            <div>
                <RegisterPanel/>
            </div>
        ) 
    }
}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, { setLanguage })(Login)