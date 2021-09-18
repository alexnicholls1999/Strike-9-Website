import styled from "styled-components"

const StyledTitle = styled.h1`
  font-size: clamp(12px, 2vw, 45px);;

  &:after {
    position: absolute;
    left: 0;
    font-size: clamp(12px, 2vw, 45px);
    color: #E5E5E5;
    z-index: -1;
    opacity: 0.5;
    content: '${(props) => props.title}'
  }
`;

function Title({ title }) {
  return <StyledTitle title={title}>{title}</StyledTitle>;
}

export default Title;