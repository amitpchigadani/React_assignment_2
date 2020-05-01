import React from 'react';

const Validation = ( props ) => {
    return (
        <div className="validation">
        {props.text.length > 5 ? <div>
          Text long enough
          </div> :
          <div>
            Text too short
          </div>}
      </div>
    );
};

export default Validation;
