import '@testing-library/jest-dom';
import { vi } from 'vitest';
import * as questionsApi from '../../../../api/questions';
import { render, screen, waitFor } from '@testing-library/react';
import { QuestionModal } from './questionModal';

vi.mock('../../../../api/questions', () => ({
  getRandomQuestion: vi.fn(() =>
    Promise.resolve({
      id: '1',
      text: '2 + 2?',
      options: [
        { id: 'a', text: '3' },
        { id: 'b', text: '4' },
        { id: 'c', text: '5' },
      ],
      correct: 'b',
    })
  ),
}));

describe('QuestionModal', () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it('renders loading state', () => {
    render(<QuestionModal topic="fundamentals" difficulty="Beginner" onCorrect={vi.fn()} onClose={vi.fn()} />);
    expect(screen.getByText(/loading question/i)).toBeInTheDocument();
  });

  it('renders question and options', async () => {
    render(<QuestionModal topic="fundamentals" difficulty="Beginner" onCorrect={vi.fn()} onClose={vi.fn()} />);
    await waitFor(() => expect(screen.getByText('2 + 2?')).toBeInTheDocument());
    expect(screen.getAllByRole('radio')).toHaveLength(3);
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });

  it('shows error message when loading fails', async () => {
    vi.spyOn(questionsApi, 'getRandomQuestion').mockRejectedValueOnce(new Error());
    render(<QuestionModal topic="fundamentals" difficulty="Beginner" onCorrect={vi.fn()} onClose={vi.fn()} />);
    await waitFor(() => expect(screen.getByText(/failed to load question/i)).toBeInTheDocument());
  });

  it('renders submit button after question loads', async () => {
    render(<QuestionModal topic="fundamentals" difficulty="Beginner" onCorrect={vi.fn()} onClose={vi.fn()} />);
    await waitFor(() => expect(screen.getByRole('button', { name: /fire!/i })).toBeInTheDocument());
  });
});
