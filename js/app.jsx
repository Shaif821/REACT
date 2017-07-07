import React from 'react';
import Student from './components/student';
import Teacher from './components/teacher';
import Add from './components/add';
import Show from './components/show';

/**
 * App component
 * @param props
 * @returns {XML}
 */
class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "MD2A REACT APP",
            students : [
                {name : "Shaif", age: "20", adress: "Sarabande"},
                {name : "Yanick", age: "21", adress: "Amsterdam"}
            ],

            teacher : [
                {name : "Berend", age: "34", adress: "???"},
                {name : "Rosmerta", age: "??", adress: "???"},
            ]
        };

    }


    render() {
        return (
            <div className="app">
                {this.state.title}

                {this.state.students.map(student => (
                    <Student
                    name={student.name}
                    age={student.age}
                    adress={student.adress}

                    />
                ))}

                {this.state.teacher.map(teacher => (
                    <Teacher
                        name={teacher.name}
                        age={teacher.age}
                        adress={teacher.adress}
                    />
                ))}

                <Show
                locatie="as"
                vak="saas"
                klas="MD2A"
                />


                <Add
                    name=""
                    age=""
                    adress=""
                />

            </div>
        );
    }

}

export default App;