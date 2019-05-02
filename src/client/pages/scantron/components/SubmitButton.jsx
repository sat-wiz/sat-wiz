import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';
import grey from '@material-ui/core/colors/grey';
import styled from 'styled-components';


//on click action that sets off to the post request

function SubmitButton(props) {
  const { classes } = props;
  return (
    <ButtonWrapper>
      <Button variant="contained" className={classes.button}>
        SUBMIT
      </Button>
    </ButtonWrapper>

  );
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    background: cyan[300],
    color: grey[50],

  },
});

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column
`
SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);
