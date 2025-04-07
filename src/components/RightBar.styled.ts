import styled from "styled-components";

export const RightBarStyle = styled.div`
  width: 20%;
  background: #eaeff5;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const SmallCard = styled.div`
  background: #ffffff;
  padding: 10px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const EnrolledCourses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Badge = styled.span`
  background: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
`;

export const Button = styled.button`
  background: #64b5f6;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
`;
