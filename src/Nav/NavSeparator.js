import styled from "styled-components";

const Separator = styled.hr`
  margin: 0;
  padding: 0;
  border: 0;
  height: 1px;
  border-top: 1px solid  #4F85EB;
`;

function NavSeparator() {
  return <Separator role="presentation" />;
}

export default NavSeparator;
