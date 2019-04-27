import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = store => ({
  section1: store.scantron.section1,
});

const mapDispatchToProps = {
};


function ScantronContainer() {
  return (
    <>
      <p>Scantron container</p>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ScantronContainer);
