import { FiPlus, FiX } from 'react-icons/fi';
import { Container } from './styles';
import { useState } from 'react';

export function NoteItem({ isNew, value, onClick, style, placeholder, onChange, ...rest }) {
  const [text, setText] = useState(value || placeholder);

  return (
    <Container isNew={isNew}>
      <input
        type="text"
        placeholder={text}
        value={value}
        onChange={(e) => setText(e.target.value)}
        style={{ width: `${text.length}rem` }}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}