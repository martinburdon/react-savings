import React from 'react';
import { connect } from 'react-redux';

const Calculations = props => {
  const { incomings, outgoings } = props;
  const insTotal = incomings.reduce((accumulator, item) => accumulator + item.amount, 0);
  const outsTotal = outgoings.reduce((accumulator, item) => accumulator + item.amount, 0);
  const savings = parseFloat(insTotal - outsTotal).toFixed(2);

  return (
    <calculations-container>
      You're saving <span className="saving-total">{savings}</span> every month
    </calculations-container>
  );
};

const mapStateToProps = state => ({
  incomings: state.incomings,
  outgoings: state.outgoings
});

export default connect(mapStateToProps)(Calculations);
