import React from "react";
import "./ResultList.css";

class ResultList extends React.Component {

    render() {
        return (
            <ul className='result-list'>
                {this.props.result}
            </ul>
        )
    };
}

export default ResultList;