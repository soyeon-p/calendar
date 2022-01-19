import { useState, useEffect } from 'react';

export const ModalState = (startTime, endTime, title) => {
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (startTime && endTime && title) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [startTime, endTime, title]);

  return disabled;
};
