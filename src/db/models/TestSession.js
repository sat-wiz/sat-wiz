'use strict';

const Sequelize = require('sequelize');
const db = require('./initialDB');

const TestSessions = db.define('testSessions', {
  sessionTime: {
    type: Sequelize.DATE
  },
  userId: {
    type: Sequelize.INTEGER
  },
  testId: {
    type: Sequelize.STRING,
    defaultValue: 'a'
  },
  numOfCorrectAnswers: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  q1: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q2: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q3: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q4: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q5: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q6: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q7: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q8: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q9: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q10: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q11: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q12: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q13: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q14: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q15: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q16: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q17: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q18: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q19: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q20: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q21: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q22: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q23: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q24: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q25: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q26: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q27: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q28: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q29: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q30: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q31: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q32: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q33: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q34: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q35: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q36: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q37: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q38: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q39: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q40: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q41: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q42: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q43: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q44: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q45: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q46: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q47: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q48: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q49: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q50: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q51: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q52: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q53: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q54: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q55: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q56: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q57: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q58: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q59: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q60: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q61: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q62: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q63: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q64: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q65: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q66: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q67: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q68: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q69: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q70: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q71: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q72: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q73: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q74: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q75: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q76: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q77: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q78: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q79: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q80: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q81: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q82: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q83: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q84: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q85: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q86: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q87: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q88: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q89: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q90: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q91: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q92: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q93: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q94: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q95: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q96: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q97: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q98: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q99: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q100: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q101: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q102: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q103: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q104: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q105: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q106: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q107: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q108: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q109: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q110: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q111: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q112: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q113: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q114: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q115: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q116: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q117: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q118: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q119: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q120: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q121: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q122: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q123: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q124: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q125: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q126: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q127: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q128: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q129: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q130: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q131: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q132: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q133: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q134: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q135: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q136: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q137: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q138: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q139: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q140: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q141: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q142: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q143: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q144: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q145: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q146: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q147: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q148: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q149: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q150: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q151: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q152: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q153: {
    type: Sequelize.STRING,
    defaultValue: null,
  },
  q154: {
    type: Sequelize.STRING,
    defaultValue: null,
  }
})

module.exports = TestSessions;