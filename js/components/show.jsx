import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Show extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="show">
                <div className="show__locatie">
                    {this.props.locatie}
                </div>
                <div className="show__vak">
                    {this.props.vak}
                </div>
                <div className="show__klas">
                    {this.props.klas}
                </div>
            </div>
        );
    }

}

export default Show;