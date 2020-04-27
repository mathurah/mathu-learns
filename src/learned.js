import React from 'react'


const Learned = ({date, learn, link}) => (
    <div className="container-fluid">
        <div className="row">
            <div className="col">
                {date}
            </div>
            <div className="col">
                {learn}
                <a href={link}>{link}</a>
            </div>
        </div>
    </div>
  );

  export default Learned