import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const MainSection = ({ classes }) => {
  return (
    <div>
    <SectionWrapper>
      <Header>A smarter way to learn from your mistakes.</Header>
      <Button variant='outlined' size='large' className={ classes.button } component={ Link } to='scantron'>
        START NOW
      </Button>

      <div className= { classes.gears }>
      <img src="https://svgshare.com/i/CpJ.svg" alt="gears" />
      </div>


     <IconWrapper>
        <Icon src='https://img.icons8.com/dusk/64/000000/edit.png'></Icon>
        <Icon src='https://img.icons8.com/dusk/64/000000/book-shelf.png'></Icon>
        <Icon src='https://img.icons8.com/dusk/64/000000/bullish.png'></Icon>
      </IconWrapper> 
      
    </SectionWrapper>
    <div>
     <img src="https://svgshare.com/i/Cnx.svg" alt="friends" />
    </div>


    <div>
    <footer>
        <a href="#" className="fa fa-facebook"></a>
        <a href="#" className="fa fa-twitter"></a>
        <a href="#" className="fa fa-google"></a>
        <a href="#" className="fa fa-linkedin"></a>
    </footer>
    </div>



    </div>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  box-shadow: 3px 2px 2px 0px rgba(51,51,51,0.5);
  justify-content: center;
  align-items: center
  flex-direction: column;
  background-image: url("cup.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60em;
`

const Header = styled.h1`
  font-family: Roboto, sans-serif;
  font-size: 3em;
  font-weight: semi-bold;
  text-align: start;
  margin-top: 1em;
  color: #232341;
  padding: 46px;
`
const IconWrapper = styled.div`
  display: flex;
  justify-content: space-between
  margin-top: 0.5em;
`
const Icon = styled.img`
  margin: 2em 1em;
  height: 4em;
  width: 4em;
`

const styles = theme => ({
  button: {
    color: '#222222',
    borderColor: '#222222',
    marginTop: '-0.5em',
    boxShadow: '3px, 2px, 2px, 0px, rgba(51,51,51,0.5)',
  },
  banner: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%'
  },
  footer: {
    position: 'static',
    bottom: '0',
    width: '100%',
    height: '150px',  
    paddingLeft: '50px',
    background: 'powderblue',
    fontSize: '100px',
    color: '#F56469',
    boxShadow: '3px 2px 2px 0px rgba(51,51,51,0.5)',
    textAlign: 'center',
  },
  gears: {
  justifyContent: 'space-between',
  marginTop: '2.5em', 
  },
});

MainSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainSection);