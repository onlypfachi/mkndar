import Styled from 'styled-components';

export const LayoutContainer = Styled.div`
display: flex;
grid-template-rows: 10% 80% 10%;
min-height: 100vh;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const PageContainer = Styled.main`
width: 1200px;
padding: 20px;
margin-top: 30%;
`;

export const Before = Styled.div`
display: grid;
height: 70px;
width: 1200px;
background-color: black;
`;

