import {PropsWithChildren, useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import AssetUtil from '../../utils/assetUtils';

type NetworkImageProps = PropsWithChildren<{
  imageUrl: string;
}>;

function NetworkImage({imageUrl}: NetworkImageProps): React.JSX.Element {
  const targetImage = {uri: imageUrl};
  const [isError, setError] = useState(false);

  function onError() {
    setError(true);
  }

  return (
    <Image
      source={imageUrl.length === 0 ? AssetUtil.imagePlaceholder : targetImage}
      resizeMode="cover"
      style={[
        styles.thumbImage,
        imageUrl.length === 0 ? styles.errorThumb : {},
      ]}
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
    backgroundColor: '#e8e8e8',
    borderRadius: 8,
  },
  errorThumb: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-end',
  },
});

export default NetworkImage;
