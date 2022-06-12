import styled from 'styled-components';

export interface IRightArrowButtonProps {
  onClick?: () => void;
  width?: string;
  height?: string;
  title: string;
  tabIndex: number;
}

export default function RightArrowButton({
  width = '25px',
  height = '20px',
  title = '',
  tabIndex = 0,
}: IRightArrowButtonProps) {
  return (
    <StyledButton title={title} tabIndex={tabIndex}>
      <RightArrowStyle
        data-testid="arrow-style-wrapper"
        xmlns="http://www.w3.org/2000/svg"
        id="right-arrow"
        viewBox="0 0 150 50"
        version="1.1"
        y="0px"
        x="0px"
        height={height}
        width={width}
      >
        <g>
          <line
            data-testid="arrow-line"
            y2="24.704"
            x1="50"
            x2="125.3"
            y1="24.704"
            strokeWidth="6"
          />
          <polygon
            data-testid="arrow-end-cap"
            points="124.4 6.284 124.4 44.606 148.35 23.69"
          />
        </g>
      </RightArrowStyle>
    </StyledButton>
  );
}

const RightArrowStyle = styled.svg`
  fill: ${({ theme: { colours } }) => colours?.sky};
  stroke: ${({ theme: { colours } }) => colours?.sky};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

const StyledButton = styled.button`
  display: flex;
  background-color: transparent;
  margin: 0;
  padding: 10px;
  border: none;
  cursor: pointer;
  &:focus-visible {
    outline: 1px solid ${({ theme: { colours } }) => colours?.blue};
    box-shadow: 0px 0px 4px 1px #00000036;
    border-radius: 2px;
  }
`;
