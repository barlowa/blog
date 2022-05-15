import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';
import Headline from 'styles/Headline';

interface ICardProps extends BlogPostItem {
  children?: React.ReactNode;
  size?: 'default' | 'large';
}

const Card = (props: ICardProps) => {
  return (
    <StyleWrapper>
      <Headline size={props?.size}>{props?.title}</Headline>
      <Preface>{props?.preface}</Preface>
      {props.children}
    </StyleWrapper>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  preface: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;

const StyleWrapper = styled.div`
  padding: 1em;
  border-radius: 5px;
  box-shadow: 0px 0px 3px 1px #0000000d;
  border-radius: 3px;
  background-color: ${({ theme: { colours } }) => colours.white};
`;

const Preface = styled.p``;
