import {PropsWithChildren, useState} from 'react';
import {Image, ImageSourcePropType, StyleSheet} from 'react-native';
import AssetUtil from '../../utils/assetUtils';

type NetworkImageProps = PropsWithChildren<{
  imageUrl: string;
  fallbackLocalImage: string;
}>;

function NetworkImage({
  imageUrl,
  fallbackLocalImage,
}: NetworkImageProps): React.JSX.Element {
  const targetImage = {uri: imageUrl};
  const [isError, setError] = useState(false);

  function onError() {
    setError(true);
  }

  return (
    <Image
      source={
        targetImage.uri.length === 0
          ? (fallbackLocalImage as ImageSourcePropType)
          : targetImage
      }
      defaultSource={AssetUtil.imagePlaceholder}
      resizeMode="cover"
      style={styles.thumbImage}
      onError={err => {
        console.error(err);
        onError();
      }}
    />
  );
}

const styles = StyleSheet.create({
  thumbImage: {
    width: 120,
    borderRadius: 8,
    backgroundColor: '#e8e8e8',
  },
});

export default NetworkImage;
