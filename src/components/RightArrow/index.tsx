import styled from 'styled-components';

export interface IRightArrowButtonProps {
  width?: string;
  height?: string;
}

export default function RightArrowButton({
  width = '2em',
  height = '1em',
}: IRightArrowButtonProps) {
  return (
    <RightArrowStyle
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
        <line y2="24.704" x1="50" x2="125.3" y1="24.704" strokeWidth="6" />
        <polygon points="124.4 6.284 124.4 44.606 148.35 23.69" />
      </g>
    </RightArrowStyle>
  );
}

const RightArrowStyle = styled.svg`
  fill: ${({ theme: { colours } }) => colours?.sky};
  stroke: ${({ theme: { colours } }) => colours?.sky};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
