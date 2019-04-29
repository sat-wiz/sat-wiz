import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MainSection = ({ classes }) => {
  return (
    <SectionWrapper>
      <Header>A smarter way to learn from your mistakes.</Header>
      <Button variant='outlined' size='large' className={ classes.button } component={ Link } to='scantron'>
        START NOW
      </Button>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: column;
  background-color: #EF7D74;
  height: 30em;
`
const Header = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 2em;
  font-weight: semi-bold;
  color: white;
`
const styles = theme => ({
  button: {
    color: 'white',
    borderColor: 'white',
    marginTop: '3em',
  },
  input: {
    display: 'none',
  },
});

MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSection);