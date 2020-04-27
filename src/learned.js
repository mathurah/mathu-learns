import React from 'react'


const Learned = ({date, learn}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                {date}
            </div>
            <div className="col">
                {learn}
            </div>
        </div>
    </div>
  );

  export default Learned