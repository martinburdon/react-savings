import React from 'react';

export default ({ ins, outs }) => {
  const insTotal = ins.reduce((accumulator, item) => accumulator + item.amount, 0);
  const outsTotal = outs.reduce((accumulator, item) => accumulator + item.amount, 0);
  const savings = insTotal - outsTotal;

  return (
    <calculations-container>
      {savings}
    </calculations-container>
  );
};
