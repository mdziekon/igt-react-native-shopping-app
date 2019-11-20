import React from 'react';
import { Thumbnail, View } from 'native-base';
import { Dimensions, Image } from 'react-native';

import { ExtractReactComponentPropsType } from '@mdziekon/igt-shopping/common/types/react.types';

type ThumbnailProps = ExtractReactComponentPropsType<Thumbnail>;

type AutosizedRemoteThumbnailOwnProps = {
  source: { uri: string };
};

type AutosizedRemoteThumbnailProps = AutosizedRemoteThumbnailOwnProps &
  ThumbnailProps;

export const AutosizedRemoteThumbnail: React.FC<AutosizedRemoteThumbnailProps> = (
  props,
) => {
  // Based on: https://stackoverflow.com/a/42268828/951007
  const [imgWidth, setImgWidth] = React.useState(0);
  const [imgHeight, setImgHeight] = React.useState(0);

  const sourceUri = props.source.uri;

  React.useEffect(() => {
    Image.getSize(
      sourceUri,
      (width, height) => {
        const screenWidth = Dimensions.get('window').width;
        const scaleFactor = width / screenWidth;
        const imageHeight = height / scaleFactor;

        setImgWidth(screenWidth);
        setImgHeight(imageHeight);
      },
      () => {},
    );
  }, [sourceUri]);

  return (
    <View>
      <Thumbnail {...props} style={{ width: imgWidth, height: imgHeight }} />
    </View>
  );
};
