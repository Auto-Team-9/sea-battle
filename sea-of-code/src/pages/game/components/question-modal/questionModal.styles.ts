import type { CSSProperties } from 'react';

export const cardStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '12px',
  backgroundColor: 'var(--color-bg-primary)',
  backgroundImage: `
    linear-gradient(var(--color-bg-secondary) 1px, transparent 1px),
    linear-gradient(90deg, var(--color-bg-secondary) 1px, transparent 1px)
  `,
  backgroundSize: '20px 20px',
};

export const actionAreaStyle: CSSProperties = {
  height: '42px',
  flexShrink: 0,
};

export const optionLabelStyle = (submitted: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  gap: '0.75rem',
  cursor: submitted ? 'default' : 'pointer',
});
