import React from 'react';
import '../App.css';
import block from '../img/block.png'


 const Block = ({name, sites, type, status}) => {
   let blocking = <img src={block} alt="block"></img>;
   let imgButtonOn = <div className="buttonImg typeOn">ON</div>;
   let imgButtonOff = <div className="buttonImg typeOff">OFF</div>;
   if (sites !== 0){
     sites = sites + ' sites';
   }
   if (status === 'blocked') {
    status = blocking;
   }else if ( status ==='enable'){
      status = imgButtonOn;
   }else if (status ==='disable'){
     status = imgButtonOff;
   }
  
    return (
          <div className="block">
              <span>{name}</span>
              <div className="textPosition">
                <span className="container">{sites}</span>
                <span className="container type">{type}</span>
                <div className="container" >{status} </div>
              </div>
          </div>
    );
  }
  
  export default Block;