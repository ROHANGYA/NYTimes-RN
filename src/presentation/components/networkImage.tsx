import {PropsWithChildren, useState} from 'react';
import {Image, StyleSheet} from 'react-native';

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
      source={targetImage}
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

export default NetworkImage;
