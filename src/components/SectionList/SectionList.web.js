import React, { PureComponent } from 'react';
import { ScrollView as RNScrollView } from 'react-native';
import PropTypes from 'prop-types';
import withStyles from '../../withStyles';

const propTypes = {
  // Required Props
  renderItem: PropTypes.func.isRequired,
  sections: PropTypes.arrayOf(PropTypes.any).isRequired,
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
  renderSectionHeader: PropTypes.func,
  renderSectionFooter: PropTypes.func,
  SectionSeparatorComponent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.func,
  ]),
};
const defaultProps = {
  ItemSeparatorComponent: null,
  ListEmptyComponent: null,
  ListHeaderComponent: null,
  ListFooterComponent: null,
  renderSectionHeader: null,
  renderSectionFooter: null,
  SectionSeparatorComponent: null,
};

class SectionList extends PureComponent {
  render() {
    const {
      sections,
      renderItem,
      ItemSeparatorComponent,
      ListEmptyComponent,
      ListHeaderComponent,
      ListFooterComponent,
      renderSectionHeader,
      renderSectionFooter,
      SectionSeparatorComponent,
      ...restProps
    } = this.props;

    const itemSeparatorView = typeof ItemSeparatorComponent === 'object' ? ItemSeparatorComponent : ItemSeparatorComponent();
    const listEmptyView = typeof ListEmptyComponent === 'object' ? ListEmptyComponent : ListEmptyComponent();
    const listHeaderView = typeof ListHeaderComponent === 'object' ? ListHeaderComponent : ListHeaderComponent();
    const listFooterView = typeof ListFooterComponent === 'object' ? ListFooterComponent : ListFooterComponent();

    let contentView = listEmptyView;

    if (sections && sections.length > 0) {
      contentView = sections.map((section) => {
        const sectionData = (section.data || []);
        const sectionContentView = sectionData.map((item, index) => {
          const info = { item, index, section };
          const itemView = [
            renderItem(info),
            index < (sectionData.length - 1) ? itemSeparatorView : null,
          ];
          return itemView;
        });
        const sectionSeparatorView = typeof SectionSeparatorComponent === 'object' ? SectionSeparatorComponent : SectionSeparatorComponent();
        const sectionHeaderView =
          (renderSectionHeader ? renderSectionHeader({ section }) : undefined);
        const sectionFooterView =
          (renderSectionFooter ? renderSectionFooter({ section }) : undefined);
        return [
          sectionHeaderView,
          sectionContentView,
          sectionFooterView,
          sectionSeparatorView,
        ];
      });
    }
    return (
      <RNScrollView
        {...restProps}
      >
        {listHeaderView}
        {contentView}
        {listFooterView}
      </RNScrollView>
    );
  }
}

SectionList.propTypes = propTypes;
SectionList.defaultProps = defaultProps;

export default withStyles('SectionList')(SectionList);
