import { INPUT_ANSWER } from './constants';

export const inputAnswer = (answer) => ({
  type: INPUT_ANSWER,
  payload: answer,
});
