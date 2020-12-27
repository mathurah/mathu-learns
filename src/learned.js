import React from 'react'
import "./App.css";

const Learned = ({date, learn}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <h3>{date}</h3>
            </div>
            <div className="col-9"dangerouslySetInnerHTML={{__html: (learn)}}></div>
        </div>
    </div>
  );

  export default Learned