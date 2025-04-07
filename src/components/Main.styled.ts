import styled from "styled-components";

export const MainSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const TopSection = styled.div`
  padding: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
`;

export const BottomSection = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;
`;

export const FilterGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export interface FilterButtonProps {
  selected?: boolean;
}

export const FilterButton = styled.button<FilterButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  background: ${(props) => (props.selected ? "	#64b5f6" : "#e0e0e0")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
`;

export const Card = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 10px;
  width: 200px;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
`;

export const Professor = styled.p`
  font-size: 12px;
  color: gray;
`;

export const Schedule = styled.p`
  font-size: 12px;
`;

export const Badge = styled.span`
  background: ${(props) => props.color};
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
  margin-right: 5px;
`;
