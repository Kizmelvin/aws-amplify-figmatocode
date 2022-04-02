/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Badge, Flex, Text, View } from "@aws-amplify/ui-react";
export default function CardE(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="320px"
      height="320px"
      alignItems="flex-start"
      position="relative"
      padding="16px 16px 16px 16px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "CardE")}
    >
      <View
        width="288px"
        height="288px"
        grow="1"
        basis="288px"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Corners")}
      >
        <Badge
          display="flex"
          gap="0"
          position="absolute"
          top="0px"
          left="0px"
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
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
          children="New"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <Flex
          gap="0"
          position="absolute"
          bottom="0px"
          left="0px"
          direction="column"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Product Title")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="T-Shirt"
            {...getOverrideProps(overrides, "T-Shirt")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Classic Long Sleeve"
            {...getOverrideProps(overrides, "Classic Long Sleeve")}
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
          position="absolute"
          bottom="4px"
          right="0px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="$99"
          {...getOverrideProps(overrides, "$99")}
        ></Text>
      </View>
    </Flex>
  );
}
