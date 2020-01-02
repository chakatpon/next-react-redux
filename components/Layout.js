import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="container layout">
                {this.props.children}
            </div>
        );
    }
}

export default Layout;