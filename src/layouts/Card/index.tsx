import PropTypes from 'prop-types';
import styled from 'styled-components';
import BlogPostItem from 'types/BlogPostItem';

interface ICardProps extends BlogPostItem {
  children?: React.ReactNode;
}

const Card: React.FunctionComponent<ICardProps> = props => {
  return (
    <StyleWrapper>
      <Title>{props?.title}</Title>
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
`;

const Title = styled.h1``;
const Preface = styled.p``;
