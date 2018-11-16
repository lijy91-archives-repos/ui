import React, { PureComponent } from 'react';
import {
  Image as RNImage,
  Text as RNText,
  View as RNView,
} from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';
import RNTouchableOpacity from '../RNTouchableOpacity';
import ListItemImage from './ListItemImage';
import ListItemContentView from './ListItemContentView';
import ListItemTitle from './ListItemTitle';
import ListItemDetailText from './ListItemDetailText';
import ListItemDivider from './ListItemDivider';

const { propTypes: RNImageProps } = RNImage;
const { propTypes: RNTextProps } = RNText;

const accessoryTypes = {
  None: 'none',
  DisclosureIndicator: 'disclosureIndicator',
};

const propTypes = {
  renderImage: PropTypes.func,
  renderTitle: PropTypes.func,
  renderDetailText: PropTypes.func,
  renderAccessoryView: PropTypes.func,
  imageSource: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
  ]),
  imageStyle: RNImageProps.style,
  title: PropTypes.string,
  titleStyle: RNTextProps.style,
  detailText: PropTypes.string,
  detailTextStyle: RNTextProps.style,
  accessoryType: PropTypes.string,
  onPress: PropTypes.func,
};
const defaultProps = {
  renderImage: null,
  renderTitle: null,
  renderDetailText: null,
  renderAccessoryView: null,
  imageSource: null,
  imageStyle: null,
  title: null,
  titleStyle: null,
  detailText: null,
  detailTextStyle: null,
  accessoryType: accessoryTypes.None,
  onPress: null,
};
const mapPropToStyles = [
  'activeOpacity',
];

class ListItem extends PureComponent {
  constructor(props) {
    super(props);

    this.renderListItemImage = this.renderListItemImage.bind(this);
    this.renderListItemTitle = this.renderListItemTitle.bind(this);
    this.renderListItemDetailText = this.renderListItemDetailText.bind(this);
  }

  renderListItemImage() {
    let {
      renderImage,
      imageSource,
      imageStyle,
    } = this.props;

    if (renderImage) {
      return renderImage();
    }

    if (!imageSource && !imageStyle) {
      return null;
    }
    if (imageStyle && typeof imageStyle === 'number') {
      imageStyle = StyleSheet.flatten(imageStyle);
    }

    return (
      <ListItemImage
        source={imageSource}
        style={imageStyle}
      />
    );
  }

  renderListItemTitle() {
    let {
      renderTitle,
      title,
      titleStyle,
    } = this.props;

    if (renderTitle) {
      return renderTitle();
    }
    if (!title) {
      return null;
    }
    if (titleStyle && typeof titleStyle === 'number') {
      titleStyle = StyleSheet.flatten(titleStyle);
    }
    return (
      <ListItemTitle style={titleStyle}>
        {title}
      </ListItemTitle>
    );
  }

  renderListItemDetailText() {
    let {
      renderDetailText,
      detailText,
      detailTextStyle,
    } = this.props;

    if (renderDetailText) {
      return renderDetailText();
    }
    if (!detailText) {
      return null;
    }
    if (detailTextStyle && typeof detailTextStyle === 'number') {
      detailTextStyle = StyleSheet.flatten(detailTextStyle);
    }
    return (
      <ListItemDetailText style={detailTextStyle}>
        {detailText}
      </ListItemDetailText>
    );
  }

  render() {
    /* eslint-disable prefer-const */
    let {
      accessoryView,
      accessoryType,
      cellStyle,
      onPress,
      ...restProps
    } = this.props;

    if (accessoryType) {
      switch (accessoryType) {
        case 'disclosureIndicator':
          // accessoryView = (
          //   <Image
          //     source={imgCommonNext}
          //     style={{ width: 6, height: 12, marginLeft: 6 }}
          //   />
          // );
          break;
        default:
          break;
      }
    }

    const imageView = this.renderListItemImage();
    const titleView = this.renderListItemTitle();
    const detailTextView = this.renderListItemDetailText();

    const Container = onPress ? RNTouchableOpacity : RNView;

    return (
      <Container
        {...restProps}
        onPress={onPress}
      >
        {imageView}
        <ListItemContentView
          cellStyle={cellStyle}
        >
          {titleView}
          {detailTextView}
        </ListItemContentView>
        {accessoryView}
      </Container>
    );
  }
}

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;
// 自定义类型
ListItem.accessoryTypes = accessoryTypes;

ListItem.ContentView = ListItemContentView;
ListItem.Title = ListItemTitle;
ListItem.DetailText = ListItemDetailText;
ListItem.Divider = ListItemDivider;

export default withStyles('ListItem', mapPropToStyles)(ListItem);
