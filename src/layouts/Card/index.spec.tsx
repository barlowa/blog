import { render } from '@testing-library/react';
import BlogPostItem from 'types/BlogPostItem';
import Card from '.';

const blogPostItem: BlogPostItem = {
  title: 'Test title',
  preface: 'Test preface',
  sys: {
    id: 'test-id',
  },
  body: 'test body',
};

describe('Card layout', () => {
  it('Shows the title', () => {
    const { queryByText } = render(<Card {...blogPostItem} />);
    expect(queryByText('Test title')).toBeInTheDocument();
  });
  it('Shows the preface', () => {
    const { queryByText } = render(<Card {...blogPostItem} />);
    expect(queryByText('Test preface')).toBeInTheDocument();
  });
  it('Shows optional children', () => {
    const { queryByText } = render(
      <Card {...blogPostItem}>{'test children'}</Card>,
    );
    expect(queryByText('test children')).toBeInTheDocument();
  });
});
