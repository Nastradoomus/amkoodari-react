import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { Input, OutlinedInput } from '@material-ui/core';
import ColoredLog from '../../../helpers/console';

const Ref = forwardRef((props, ref) => {
  const textInput = useRef(null);

  useImperativeHandle(ref, () => ({
    handleClick(type) {
      console.log(type);
      if (type === 'add') {
        textInput.current.focus();
        textInput.current.classList.add('Mui-focused');
        ColoredLog('🎢 Parent: Button click -> Child: Input focus', 'fuchsia');
      } else {
        textInput.current.blur();
        textInput.current.classList.remove('Mui-focused');
        ColoredLog(
          '🦶 Parent: Button click -> Child: Remove input focus',
          'red',
        );
      }
    },
  }));

  return (
    <div>
      <Input type="text" ref={textInput} variant={OutlinedInput} />
    </div>
  );
});

export default Ref;
