import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Add extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="add">
                <input type="text" name={this.props.name} className="add__name">
                </input>
                <input type="number" name={this.props.age} className="add__age">
                </input>
                <input type="text" name={this.props.adress} className="add__adress">
                </input>
                <input type="submit" value="Verzenden"></input>
            </div>
        );
    }
}

export default Add;