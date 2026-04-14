type MessageVariant = 'error' | 'success' | 'warning' | 'info';
type MessageSize = 'big' | 'small';

type MessageProps = {
  message: string | null;
  variant?: MessageVariant;
  size?: MessageSize;
  className?: string;
};

const sizeStyles: Record<MessageSize, string> = {
  big: 'm-auto w-1/2 p-4 text-center text-5xl',
  small: 'mb-4 w-auto px-3 py-1.5 text-justify text-sm',
};

const variantStyles: Record<MessageVariant, string> = {
  error: 'text-red-500',
  success: 'text-green-500',
  warning: 'text-yellow-500',
  info: '',
};

const Message = ({
  message = '',
  variant = 'info',
  size = 'big',
  className = '',
}: MessageProps) => {
  return (
    <div className={`doodle-border ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}>
      <p>{variant === 'error' ? `Error: ${message}` : message}</p>
    </div>
  );
};

export default Message;
