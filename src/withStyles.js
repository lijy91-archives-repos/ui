import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import _ from 'lodash';

const withStyles = (componentName, mapStyleToProps = []) => (WrappedComponent) => {
  class StyledComponent extends PureComponent {
      static propTypes = {
        ...WrappedComponent.propTypes,
      };

      static defaultProps = {
        ...WrappedComponent.defaultProps,
      };

      static contextTypes = {
        themeName: PropTypes.string,
        themeStyle: PropTypes.object,
        parentStyle: PropTypes.object,
      };

      static childContextTypes = {
        parentStyle: PropTypes.object,
      };

      constructor(props, context) {
        super(props, context);
        const resolvedStyle = this.resolveStyle(props, context);

        this.state = {
          style: resolvedStyle.componentStyle,
          childrenStyle: resolvedStyle.styleSheets,
          addedProps: this.resolveAddedProps(resolvedStyle),
        };
      }

      getChildContext() {
        return {
          parentStyle: this.state.childrenStyle,
        };
      }

      componentWillReceiveProps(nextProps, nextContext) {
        const resolvedStyle = this.resolveStyle(nextProps, nextContext);

        this.setState({
          style: resolvedStyle.componentStyle,
          childrenStyle: resolvedStyle.styleSheets,
          addedProps: this.resolveAddedProps(resolvedStyle),
        });
      }

      resolveStyle(props, context) {
        const { themeStyle, parentStyle } = context;
        let { style } = props;

        if (typeof style === 'number') {
          style = StyleSheet.flatten(style);
        } else if (!style) {
          style = {};
        }

        // 以下为目前支持的属性选择器类型（其他类型默认忽略）
        const styledTypes = [
          'string',
          'number',
          'boolean',
        ];

        const styledProps = _.pickBy(props, value => _.includes(styledTypes, typeof value));
        const selectors = _.union([componentName],
          _.map(styledProps, (value, key) => `${componentName}[${key}=${value}]`),
        );

        const pickedThemeStyle = _.pickBy(themeStyle, (value, key) => _.includes(selectors, key));
        const pickedParentStyle = _.pickBy(parentStyle, (value, key) => _.includes(selectors, key));

        const mergedStyle = _.merge({},
          ..._.values(pickedThemeStyle),
          ..._.values(pickedParentStyle),
          style,
        );

        const componentStyle = _.omit(_.omitBy(mergedStyle, _.isObject), mapStyleToProps);
        return {
          styleSheets: mergedStyle, // 原始样式表
          componentStyle,
        };
      }

      resolveAddedProps(resolvedStyle) {
        let addedProps = _.pick(resolvedStyle.styleSheets, mapStyleToProps);
        if (!addedProps) {
          addedProps = {};
        }
        return addedProps;
      }

      render() {
        const { addedProps, style } = this.state;
        return (
          <WrappedComponent
            {...this.props}
            {...addedProps}
            style={style}
          />
        );
      }
  }

  StyledComponent.displayName = `Styled${componentName}`;

  return hoistNonReactStatic(StyledComponent, WrappedComponent);
};

export default withStyles;
