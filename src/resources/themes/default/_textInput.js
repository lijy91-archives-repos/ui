import {
  textPrimary,
  textHint,
} from './colors';
import { fontSizeBody } from './dimens';

export default {
  TextInput: {
    height: 42,
    paddingTop: 0,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    color: textPrimary,
    fontSize: fontSizeBody,
    backgroundColor: '#F5F5F5',
    // 以下样式将会复制到 Props.
    selectionColor: textPrimary,
    placeholderTextColor: textHint,
    underlineColorAndroid: 'rgba(0, 0, 0, 0)',
  },
};
