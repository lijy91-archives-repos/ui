import React, { PureComponent } from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import hoistNonReactStatic from 'hoist-non-react-statics';
import deepMerge from './utilities/deepMerge';
import pickBy from './utilities/pickBy';

const withStyles = (componentName, mapPropToStyles = []) => (WrappedComponent) => {
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

        // 生成样式选择器
        const selectors = [
          componentName,
          ...Object
            .keys(props)
            .filter(key => styledTypes.includes(typeof props[key]))
            .map(key => `${componentName}[${key}=${props[key]}]`),
        ];

        const pickedThemeStyle = pickBy(themeStyle, (value, key) => selectors.includes(key));
        const pickedParentStyle = pickBy(parentStyle, (value, key) => selectors.includes(key));

        // 将样式按顺序合并：主题样式，父组件样式，行内样式
        const mergedStyle = deepMerge(
          {},
          ...Object.values(pickedThemeStyle),
          ...Object.values(pickedParentStyle),
          style,
        );

        const componentStyle = pickBy(
          mergedStyle,
          (value, key) => !(typeof value === 'object' || mapPropToStyles.includes(key)),
        );

        return {
          styleSheets: mergedStyle, // 原始样式表
          componentStyle,
        };
      }

      resolveAddedProps(resolvedStyle) {
        const styleSheets = resolvedStyle.styleSheets || {};
        const addedProps = pickBy(
          styleSheets,
          (value, key) => mapPropToStyles.includes(key) && !this.props[key],
        );
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
