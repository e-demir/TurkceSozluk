import React from "react";
import { StatusBar, ScrollView } from "react-native"
import { SafeAreaView } from "react-native-safe-area-view"
import { useFocusEffect } from '@react-navigation/native';
import Box from "../components/box"
import Text from "../components/text"
import BookmarkBlack from "../components/icons/BookmarkBlack"
import Bookmark from "../components/icons/Bookmark"
import MoreHorizontal from "../components/icons/MoreHorizontal"
import Volume from "../components/icons/Volume"
import VolumeBlack from "../components/icons/VolumeBlack"
import ActionButton, { ActionButtonTitle } from "../components/actionButton"
import {
  DetailSummaryItemContainer,
  DetailSummaryItemMainText,
  DetailSummaryItemSecondaryText
} from "../components/detailSummaryItem"

export default function DetailView() {

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  return (    
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
      <Box>
        <Text fontSize={36} fontWeight="bold">Detay</Text>
        <Text color="textLight" mt={6} fontStyle="italic">Arapça kalem</Text>
      </Box>
      <Box flexDirection="row" mt={24}>
        <ActionButton >
          <Volume />
        </ActionButton>

        {/* <ActionButton ml={12}>
          <VolumeBlack />          
        </ActionButton> */}

        <ActionButton ml={12}>
          <Bookmark color="#48515B" />
        </ActionButton>

        {/* <ActionButton>
          <BookmarkBlack />          
        </ActionButton> */}

        <ActionButton ml="auto">
          <MoreHorizontal />
          <ActionButtonTitle>Türk işaret dili</ActionButtonTitle>
        </ActionButton>
      </Box>
      <Box mt={40}>
        <DetailSummaryItemContainer>
          <DetailSummaryItemMainText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            </DetailSummaryItemMainText>
          <DetailSummaryItemSecondaryText>
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </DetailSummaryItemSecondaryText>
        </DetailSummaryItemContainer>

        <DetailSummaryItemContainer border>
          <DetailSummaryItemMainText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            </DetailSummaryItemMainText>
          <DetailSummaryItemSecondaryText>
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </DetailSummaryItemSecondaryText>
        </DetailSummaryItemContainer>
      </Box>
      </Box>
    </Box>
  );
}
