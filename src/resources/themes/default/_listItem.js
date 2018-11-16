import {
  transparent,
  white,
  textPrimary,
  textSecondary,
} from './colors';
import {
  fontSizeTitle,
  fontSizeSubheading,
} from './dimens';

export default {
  ListItem: {
    activeOpacity: 0.8,
    backgroundColor: white,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 42,
  },
  ListItemImage: {
    minWidth: 40,
    minHeight: 40,
    marginRight: 12,
  },
  ListItemContentView: {
    flex: 1,
  },
  ListItemTitle: {
    backgroundColor: 'transparent',
    color: textPrimary,
    fontSize: fontSizeTitle,
    fontWeight: '500',
  },
  ListItemDetailText: {
    color: textSecondary,
    backgroundColor: transparent,
    fontSize: fontSizeSubheading,
    marginTop: 4,
    marginBottom: 2,
  },
  ListItemDivider: {
    Divider: {
      backgroundColor: white,
      paddingLeft: 16,
    },
  },
};
