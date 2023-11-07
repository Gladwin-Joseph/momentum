import styled from "styled-components";

export const AdviceContainer = styled.div`
  position: fixed;
  text-align: center;
  bottom: 0;
  width: 600px;
  left: 50%;
  margin-left: -300px;
  margin-bottom: 20px;

  @media screen and (max-width: 600px) {
    width: 300px;
    margin-left: -150px;
  }
`;
export const Text = styled.p`'
  font-size: 1.2rem;
  font-weight: 500;
  
`;
