import React from "react";
import ListBar from "./ListBar";
import SearchInfo from "./SearchInfo";

class PersonInfo extends React.Component {

    render(){
        return (
                <div className="container">
                    <ListBar />
                    <SearchInfo />
                </div>
            );
    }

}

export default PersonInfo;