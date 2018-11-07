import { textSecondary } from './colors';
import { fontSizeCaption } from './dimens';

export default {
  Divider: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  'Divider[orientation=vertical]': {
    DividerLabel: {
      marginTop: 8,
      marginBottom: 8,
    },
    DividerLine: {
      flex: 1,
      minWidth: 1,
      minHeight: 20,
      width: 1,
    },
  },
  'Divider[orientation=horizontal]': {
    flexDirection: 'row',
    DividerLabel: {
      marginLeft: 8,
      marginRight: 8,
    },
    DividerLine: {
      flex: 1,
      minWidth: 20,
      minHeight: 1,
      height: 1,
    },
  },
  DividerLabel: {
    color: textSecondary,
    fontSize: fontSizeCaption,
  },
  DividerLine: {
    backgroundColor: '#dddddd',
  },
};
