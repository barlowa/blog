import { render } from '@testing-library/react';
import RightArrowButton, { IRightArrowButtonProps } from '.';
const props: IRightArrowButtonProps = {
  title: 'Test title',
  width: '10px',
  height: '10px',
  onClick: () => null,
};
describe('Card layout', () => {
  it('Has a title', () => {
    const { getByTitle } = render(<RightArrowButton {...props} />);
    expect(getByTitle('Test title').getAttribute('title')).toBe('Test title');
  });
  it('Has a line', () => {
    const { getAllByTestId } = render(<RightArrowButton {...props} />);
    expect(getAllByTestId('arrow-line')).toBeTruthy();
  });
  it('Has an end cap', () => {
    const { getAllByTestId } = render(<RightArrowButton {...props} />);
    expect(getAllByTestId('arrow-end-cap')).toBeTruthy();
  });
  it('Is the correct height and width', () => {
    const { getByTestId } = render(<RightArrowButton {...props} />);
    expect(getByTestId('arrow-style-wrapper').getAttribute('height')).toBe(
      '10px',
    );
    expect(getByTestId('arrow-style-wrapper').getAttribute('width')).toBe(
      '10px',
    );
  });
});
