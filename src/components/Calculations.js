import React from 'react';

export default ({ ins, outs }) => {
  const insTotal = ins.reduce((accumulator, item) => accumulator + item.amount, 0);
  const outsTotal = outs.reduce((accumulator, item) => accumulator + item.amount, 0);
  const savings = insTotal - outsTotal;

  return (
    <calculations-container>
      You're saving <span className="saving-total">{savings}</span> every month
    </calculations-container>
  );
};
