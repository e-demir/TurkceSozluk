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
import DetailSummaryItem from "../components/detailSummaryItem"
import LoaderText from "../components/loaderText";

export default function DetailView({ route }) {

  const [data, setData] = React.useState(null)
  const queryKeyword = route.params?.keyword
  
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
    }, [])
  );

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${queryKeyword}`)
    const data = await response.json()
    setData(data[0])
  }

  React.useEffect(() => {
    getDetailData()
  }, [])

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={36} fontWeight="bold">{queryKeyword}</Text>
          {data?.telaffuz || data?.lisan ? (
          <Text color="textLight" mt={6} fontStyle="italic">{data?.telaffuz && data?.telaffuz} {data?.lisan}</Text>):null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <ActionButton disabled={!data} >
            <Volume />
          </ActionButton>

          {/* <ActionButton ml={12}>
          <VolumeBlack />          
        </ActionButton> */}

          <ActionButton ml={12} disabled={!data}>
            <Bookmark color="#48515B" />
          </ActionButton>

          {/* <ActionButton>
          <BookmarkBlack />          
        </ActionButton> */}

          <ActionButton ml="auto" disabled={!data}>
            <MoreHorizontal />
            <ActionButtonTitle>Türk işaret dili</ActionButtonTitle>
          </ActionButton>
        </Box>

        <Box mt={40}>
          {data ? (
            data.anlamlarListe.map(item => ( 
          <DetailSummaryItem 
          key={item.anlam_sira}
          data={item} 
          border={item.anlam_sira !== "1"}/>                            
          ))
            ) : (
              [1, 2, 3].map(index => (
                <DetailSummaryItem key={index} border={index !== 1}>
                  <LoaderText />
                  <LoaderText width={180} mt={7} />
                </DetailSummaryItem>
              ))
            )}
        </Box>
      </Box>
    </Box>
  );
}
