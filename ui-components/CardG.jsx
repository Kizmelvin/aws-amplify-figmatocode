/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function CardG(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardG")}
    >
      <Image
        width="400px"
        height="351px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        height="351px"
        grow="1"
        basis="560px"
        alignSelf="stretch"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Title")}
        >
          <Flex
            gap="8px"
            direction="row"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame")}
          >
            <Text
              fontFamily="Inter"
              fontSize="14px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              width="464px"
              grow="1"
              basis="464px"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Information about this product"
              {...getOverrideProps(overrides, "Information about this product")}
            ></Text>
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon")}
            >
              <Icon
                width="20px"
                height="18.350006103515625px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 20,
                  height: 18.350006103515625,
                }}
                paths={[
                  {
                    d: "M14.5 0C12.76 0 11.09 0.81 10 2.09C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.42 0 5.5C0 9.28 3.4 12.36 8.55 17.04L10 18.35L11.45 17.03C16.6 12.36 20 9.28 20 5.5C20 2.42 17.58 0 14.5 0ZM10.1 15.55L10 15.65L9.9 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 2.99 9.07 4.36L10.94 4.36C11.46 2.99 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55Z",
                    fill: "rgba(13,26,38,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="12.5%"
                bottom="11.04%"
                left="8.33%"
                right="8.33%"
                {...getOverrideProps(overrides, "Vector")}
              ></Icon>
            </View>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="25px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Classic Long Sleeve T-Shirt"
            {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
          ></Text>
        </Flex>
        <Divider
          width="40px"
          height="1px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="8px"
          direction="column"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.mtm"
            )}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(92,102,112,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Information about this product."
            {...getOverrideProps(
              overrides,
              "Information about this product.ymx"
            )}
          ></Text>
        </Flex>
        <Badge
          display="flex"
          gap="10px"
          direction="column"
          width="fit-content"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          borderRadius="99px"
          padding="6px 8px 6px 8px"
          backgroundColor="rgba(239,240,240,1)"
          fontSize="12px"
          lineHeight="12px"
          fontFamily="Inter"
          fontWeight="700"
          color="rgba(13,26,38,1)"
          textAlign="left"
          size="small"
          variation="default"
          children="New!"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="16px"
          direction="row"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Bottom Row")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="center"
            shrink="0"
            height="36px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Rating")}
          >
            <Rating
              display="flex"
              gap="8px"
              direction="row"
              width="fit-content"
              alignItems="center"
              shrink="0"
              height="36px"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              {...getOverrideProps(overrides, "Ratingpgq")}
            ></Rating>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="22px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              textDecoration="underline"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Reviews"
              {...getOverrideProps(overrides, "Reviews")}
            ></Text>
          </Flex>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="right"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            width="189px"
            grow="1"
            basis="189px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="$99/Night"
            {...getOverrideProps(overrides, "$99/Night")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
