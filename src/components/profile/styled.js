import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 20px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  color: white;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 8px;
  height: 200px;
  

  h1 {
    font-family: courier;
    font-size: 40px;
    font-weight: bold;
    
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    font-family:serif;
  }

  h4 {
    font-size: 16px;
    font-weight: bold;
    font-family:serif;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 8px;
    text-align: center;
  }
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  h3 {
    margin-right: 8px;
    
  }

  a {
    font-size: 18px;
    color: blue;
    font-weight: bold;
    font-family: arial;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 10%;
  width: 200px;
  margin: 8px;
`;
