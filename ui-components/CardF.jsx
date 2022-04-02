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
import MyIcon from "./MyIcon";
export default function CardF(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="960px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "CardF")}
    >
      <Image
        width="320px"
        height="366px"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="24px"
        direction="column"
        width="640px"
        grow="1"
        basis="640px"
        height="366px"
        position="relative"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
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
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Ratings")}
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
            {...getOverrideProps(overrides, "Rating")}
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
            width="19px"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="72"
            {...getOverrideProps(overrides, "72")}
          ></Text>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="fit-content"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Tags")}
        >
          <Badge
            display="flex"
            gap="10px"
            direction="column"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
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
            children="New"
            {...getOverrideProps(overrides, "Badgecsa")}
          ></Badge>
          <Badge
            display="flex"
            gap="10px"
            direction="column"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
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
            children="Classic"
            {...getOverrideProps(overrides, "Badgepke")}
          ></Badge>
          <Badge
            display="flex"
            gap="10px"
            direction="column"
            width="fit-content"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            height="24px"
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
            children="Modern"
            {...getOverrideProps(overrides, "Badgezea")}
          ></Badge>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(13,26,38,1)"
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
          {...getOverrideProps(overrides, "Information about this product.")}
        ></Text>
        <Flex
          gap="16px"
          direction="row"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Quote")}
        >
          <MyIcon
            width="24px"
            height="24px"
            shrink="0"
            overflow="hidden"
            position="relative"
            padding="0px 0px 0px 0px"
            type="chat"
            {...getOverrideProps(overrides, "MyIcon")}
          ></MyIcon>
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
            width="536px"
            grow="1"
            basis="536px"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="“This is a quote.“"
            {...getOverrideProps(overrides, "\u201CThis is a quote.\u201C")}
          ></Text>
        </Flex>
        <Divider
          height="1px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <Flex
          gap="32px"
          direction="row"
          width="fit-content"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Features")}
        >
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featuresas")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icontvo")}
            >
              <Icon
                width="17.58984375px"
                height="13.40997314453125px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.40997314453125,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectorpjp")}
              ></Icon>
            </View>
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
              children="Fast"
              {...getOverrideProps(overrides, "Fast")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featureiwj")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Iconsqs")}
            >
              <Icon
                width="17.58984375px"
                height="13.40997314453125px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.40997314453125,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectorshk")}
              ></Icon>
            </View>
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
              children="Fun"
              {...getOverrideProps(overrides, "Fun")}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="fit-content"
            alignItems="flex-start"
            shrink="0"
            height="24px"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Featurezap")}
          >
            <View
              width="24px"
              height="24px"
              shrink="0"
              overflow="hidden"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Iconuwb")}
            >
              <Icon
                width="17.58984375px"
                height="13.40997314453125px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 17.58984375,
                  height: 13.40997314453125,
                }}
                paths={[
                  {
                    d: "M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z",
                    fill: "rgba(67,168,84,1)",
                    fillRule: "nonzero",
                  },
                ]}
                position="absolute"
                top="23.29%"
                bottom="20.83%"
                left="14.21%"
                right="12.5%"
                {...getOverrideProps(overrides, "Vectorrob")}
              ></Icon>
            </View>
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
              children="Flirty"
              {...getOverrideProps(overrides, "Flirty")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
