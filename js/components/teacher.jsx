import React from 'react';

/**
 * Student component
 * @param props
 * @returns {XML}
 */
class Teacher extends React.Component {

    constructor(props) {
        super(props);
    }

    onShow(){
        this.props.onShow(this.props.name);
    }


    render() {
        return (
            <div className="teacher" onClick={() => this.onShow()}>
                <div className="teacher__name">
                    {this.props.name}
                </div>
                <div className="teacher__age">
                    {this.props.age}
                </div>
                <div className="teacher__adress">
                    {this.props.adress}
                </div>
            </div>
        );
    }

}

export default Teacher;