import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { describe, it, expect } from 'vitest';

import ButtonBasic from '@/components/button/basic';

const user = userEvent.setup();

describe('ButtonBasic Component', () => {
  it('renders the button with the correct text and click on it', async () => {
    render(<ButtonBasic onClick={() => {}}>Click me</ButtonBasic>);

    const buttonElement = screen.getByText('Click me');

    expect(buttonElement).toBeDefined();
    await user.click(buttonElement);
  });
});
