import React from "react";
import "./ResultList.css";

class ResultList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='result-list'>
                {this.props.result}
            </ul>
        )
    };
}

export default ResultList;