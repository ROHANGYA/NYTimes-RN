import {PropsWithChildren, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import AssetUtil from '../../utils/assetUtils';

type NetworkImageProps = PropsWithChildren<{
  imageUrl: string;
  fallbackLocalImage: string;
}>;

function NetworkImageDefault({
  imageUrl,
  fallbackLocalImage,
}: NetworkImageProps): React.JSX.Element {
  const targetImage = {uri: imageUrl};
  const [image, setImage] = useState<any>(targetImage);

  function onError() {
    setImage(AssetUtil.warning);
  }

  return (
    <Image
      source={image}
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
  },
});

export default NetworkImageDefault;
