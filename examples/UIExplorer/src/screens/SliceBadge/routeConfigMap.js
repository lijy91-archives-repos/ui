import BadgeExample from './BadgeExample';
import BadgeTypesDot from './BadgeTypesDot';
import BadgeTypesText from './BadgeTypesText';

const routeConfigMap = {
  BadgeExample: {
    screen: BadgeExample,
    path: 'slices/badge-example',
  },
  BadgeTypesDot: {
    screen: BadgeTypesDot,
    path: 'slices/badge-types-dot',
  },
  BadgeTypesText: {
    screen: BadgeTypesText,
    path: 'slices/badge-types-text',
  },
};

export default routeConfigMap;
