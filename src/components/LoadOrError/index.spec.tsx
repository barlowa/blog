import { render } from '@testing-library/react';

import LoadOrError from '.';

describe('LoadOrError component', () => {
  it('Shows the loading state', () => {
    const { queryByText } = render(
      <LoadOrError loading>
        <div>some div</div>
      </LoadOrError>,
    );
    expect(queryByText('Loading...')).toBeInTheDocument();
  });
  it('Shows component after loading without errors', () => {
    const { queryByText } = render(
      <LoadOrError loading={false}>
        <div>some div</div>
      </LoadOrError>,
    );
    expect(queryByText('some div')).toBeInTheDocument();
  });
  it('Shows the error message', () => {
    const { queryByText } = render(
      <LoadOrError loading={false} error={{ message: 'error' }}>
        <div>some div</div>
      </LoadOrError>,
    );
    expect(queryByText('error')).toBeInTheDocument();
  });
});
