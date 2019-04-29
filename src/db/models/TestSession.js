module.exports = (sequelize, DataTypes) => {
 
  const TestSession = sequelize.define('TestSession', {
    testId: {
      type: DataTypes.STRING,
      defaultValue: 'a'
    },
    numOfCorrectAnswers: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    q1: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q2: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q3: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q4: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q5: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q6: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q7: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q8: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q9: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q10: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q11: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q12: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q13: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q14: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q15: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q16: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q17: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q18: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q19: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q20: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q21: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q22: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q23: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q24: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q25: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q26: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q27: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q28: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q29: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q30: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q31: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q32: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q33: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q34: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q35: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q36: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q37: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q38: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q39: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q40: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q41: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q42: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q43: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q44: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q45: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q46: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q47: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q48: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q49: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q50: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q51: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q52: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q53: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q54: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q55: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q56: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q57: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q58: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q59: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q60: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q61: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q62: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q63: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q64: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q65: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q66: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q67: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q68: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q69: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q70: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q71: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q72: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q73: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q74: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q75: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q76: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q77: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q78: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q79: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q80: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q81: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q82: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q83: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q84: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q85: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q86: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q87: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q88: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q89: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q90: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q91: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q92: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q93: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q94: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q95: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q96: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q97: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q98: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q99: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q100: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q101: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q102: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q103: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q104: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q105: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q106: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q107: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q108: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q109: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q110: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q111: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q112: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q113: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q114: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q115: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q116: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q117: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q118: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q119: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q120: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q121: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q122: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q123: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q124: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q125: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q126: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q127: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q128: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q129: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q130: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q131: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q132: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q133: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q134: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q135: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q136: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q137: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q138: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q139: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q140: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q141: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q142: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q143: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q144: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q145: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q146: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q147: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q148: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q149: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q150: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q151: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q152: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q153: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
    q154: {
      type: DataTypes.STRING,
      defaultValue: null,
    }
  })
  return TestSession;
}