import React from 'react';
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

let pushMock;
let searchParamsMock;

vi.mock('next/navigation', () => ({
  useSearchParams: () => searchParamsMock,
  useRouter: () => ({ push: pushMock }),
}));

import InputSearch from '@/components/input/search';

describe('InputSearch integration', () => {
  beforeEach(() => {
    pushMock = vi.fn();
    searchParamsMock = {
      get: (key) => (key === 'search' ? 'Galaxy' : null),
      has: (key) => key === 'search',
    };
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('syncs with the current search param and pushes router updates', async () => {
    const user = userEvent.setup();

    render(<InputSearch />);

    expect(pushMock).toHaveBeenCalledWith('/?search=Galaxy');
    pushMock.mockClear();

    const input = screen.getByRole('searchbox', {
      name: /Search smartphone/i,
    });

    expect(input.value).toBe('Galaxy');

    await user.clear(input);
    await user.type(input, 'Pixel');

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalled();
        expect(pushMock).toHaveBeenLastCalledWith('/?search=Pixel');
      },
      { timeout: 1500 },
    );

    await user.clear(input);

    await waitFor(
      () => {
        expect(pushMock).toHaveBeenCalled();
        expect(pushMock).toHaveBeenLastCalledWith('/');
      },
      { timeout: 1500 },
    );
  });
});
