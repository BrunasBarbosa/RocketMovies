import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';

export function NoteItem({ isNew = false, value, onClick, style, placeholder, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        {...rest}
        style={isNew ? { width: `${placeholder.length}rem` } : { width: `${value.length}rem` }}
        readOnly={!isNew}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
};