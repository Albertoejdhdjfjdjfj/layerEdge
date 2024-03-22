import { useState } from 'react';
export function useBool(initial = false) {
  const [value, setValue] = useState(initial);
  const changeValue = () => {
    setValue(!value);
  };

  return [value, changeValue];
}
