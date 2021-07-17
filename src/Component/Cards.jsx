import React from 'react';
import styled from 'styled-components';


  // Styling
  const CardStyle = styled.div`
  border: 1px solid black;
  height: 310px;
  margin-top: 50px;
  margin-bottom: 30px;
  width: 250px;
  float: left;
  background-color: white;
  margin-left: 30px;
  border-radius: 10px; 
  box-shadow: 4px 4px 8px 4px rgba(0.2,0.2,0.2,0.2);
  transition: 0.3s;
  &:hover {
      box-shadow: 3px 8px 16px 3px rgba(0.5,0.5,0.5,0.5);
      cursor:default;
  }
  `
  const ImgStyle = styled.div`
//    border:2px solid red;
  margin-top:5px;
  `
  const CardBody = styled.div`
//    border:2px solid green;
  width: 200px;
  display: inline-block;
  `
  const CardBtn = styled.button`
  border-radius: 5px;
  background-color: rgb(12, 0, 0);
  color: white;
  cursor: pointer;
  `

   // Styling


const Cards = (props) => {
 
    return (
        <div>
             <CardStyle>
                  <ImgStyle>
                     <img src={props.picture}
                     alt='Poster' width='200px' height='200px'/>  
                     </ImgStyle>
                      <CardBody> 
                    <h5>{props.name}</h5>
                    <a href={props.link} target="_blank" rel="noreferrer">  
                    <CardBtn>Full Profile</CardBtn>
                     </a>
                 </CardBody>   
             </CardStyle>
              </div>
              )
}

export default Cards
