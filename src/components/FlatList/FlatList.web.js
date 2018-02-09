import React, { PureComponent } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
  // Required Props
  renderItem: PropTypes.func.isRequired,
  data: PropTypes.arrayOf([
    PropTypes.any,
  ]).isRequired,
  // Optional Props
  ItemSeparatorComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  ListEmptyComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  ListHeaderComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
  ListFooterComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};
const defaultProps = {
  ItemSeparatorComponent: null,
  ListEmptyComponent: null,
  ListHeaderComponent: null,
  ListFooterComponent: null,
};

class FlatList extends PureComponent {
  render() {
    const {
      data,
      renderItem,
      ItemSeparatorComponent,
      ListEmptyComponent,
      ListHeaderComponent,
      ListFooterComponent,
    } = this.props;

    const itemSeparatorView = typeof ItemSeparatorComponent === 'object' ? ItemSeparatorComponent : ItemSeparatorComponent();
    const listEmptyView = typeof ListEmptyComponent === 'object' ? ListEmptyComponent : ListEmptyComponent();
    const listHeaderView = typeof ListHeaderComponent === 'object' ? ListHeaderComponent : ListHeaderComponent();
    const listFooterView = typeof ListFooterComponent === 'object' ? ListFooterComponent : ListFooterComponent();

    let contentView = listEmptyView;
    if (data) {
      contentView = data.map((item, index) => {
        const info = { item, index };
        return [
          renderItem(info),
          (data.length - 1) === index ? null : itemSeparatorView,
        ];
      });
    }
    return (
      <RNScrollView
        {...this.props}
      >
        {listHeaderView}
        {contentView}
        {listFooterView}
      </RNScrollView>
    );
  }
}

FlatList.propTypes = propTypes;
FlatList.defaultProps = defaultProps;

export default withStyles('FlatList')(FlatList);
