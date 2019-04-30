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
      <Button variant='outlined' size='large' className={ classes.Sbutton } component={ Link } to='scantron'>
        START NOW
      </Button>
      <IconWrapper>
        <Icon src='https://img.icons8.com/dusk/64/000000/edit.png'></Icon>
        <Icon src='https://img.icons8.com/dusk/64/000000/book-shelf.png'></Icon>
        <Icon src='https://img.icons8.com/dusk/64/000000/bullish.png'></Icon>
      </IconWrapper>
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center
  flex-direction: column;
  background-color: #1a809a;
  height: 30em;
`
const Header = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 3em;
  font-weight: semi-bold;
  color: white;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between
`
const Icon = styled.img`
  margin: 2em 1em;
  height: 7em;
  width: 7em;
`
const styles = theme => ({
  button: {
    color: 'white',
    borderColor: 'white',
    marginTop: '3em',
  },
});

MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSection);