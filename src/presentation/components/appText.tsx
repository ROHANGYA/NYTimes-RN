import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

type TextProps = PropsWithChildren<{
  style: StyleProp<ViewStyle>;
  numberOfLines?: number;
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip';
  isSecondaryFont?: boolean;
}>;

function AppText({
  style,
  numberOfLines,
  ellipsizeMode,
  isSecondaryFont = false,
  children,
}: TextProps): React.JSX.Element {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: isSecondaryFont ? 'Roboto-Regular' : 'times',
    },
  });
  return (
    <Text
      style={[style, styles.textStyle]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'times',
  },
});

export default AppText;
