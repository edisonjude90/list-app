import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    viewResult:state.viewDetails
});

const ConnectSearchInfo = ({viewResult})=>{
return (
        <div className="search-info">
            {(viewResult.first) &&
                <div>
                    <header><h2>Info</h2></header>
                    <div>
                        <label> First Name : { viewResult.first } </label>
                    </div>
                    <div>
                        <label> Last Name : { viewResult.last } </label>
                    </div>
                    <div>
                        <label> Age : { viewResult.age } </label>
                    </div>
                    <div>
                        <label> Date Of Birth : { viewResult.dob } </label>
                    </div>
                    <div>
                        <label> Location : { viewResult.location } </label>
                    </div>
                    <div>
                        <label> Description : { viewResult.description } </label>
                    </div>
                </div>
            }
        </div>
    
)};


const SearchInfo = connect(mapStateToProps)(ConnectSearchInfo);

export default SearchInfo;