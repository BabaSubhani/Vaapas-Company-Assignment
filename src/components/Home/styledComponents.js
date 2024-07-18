import styled from 'styled-components';

export const HomeTopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100vh;
  padding: 20px;
  font-family: 'Roboto';
`;

export const RenderingMultipleStates = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: white;
  padding: 20px;
  font-family: 'Roboto';
`;

export const MovieLogo = styled.img`
  height: 150px;
  @media screen and (min-width:768px){
  height:100px;
  }
`;

export const SearchAndIconContainer = styled.div`
  height: 35px;
  width: 100%;
  margin: 8px;
  margin-left: 14px;
  margin-right: 14px;
  display: flex;
  margin-top: 10px;
  @media screen and (min-width:768px){
  width:50%;
  }
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 100%;
  padding-left: 8px;
  font-family: 'Roboto';
  font-size: 18px;
`;

export const SearchIconContainer = styled.button`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
