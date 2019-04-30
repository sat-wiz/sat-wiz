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
      <StyledButton variant='outlined' size='large' className={ classes.Sbutton } component={ Link } to='scantron'>
        START NOW
      </StyledButton>
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

const StyledButton = styled(Button)`
  color: 'white',
  border-color: 'white',
  margin-top: '3em',
`


MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default MainSection;