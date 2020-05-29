import React from "react";
import { Button } from "react-native"
import BoxCenter from "../components/box-center"
import {Logo}  from "../components/icons"


function SearchView({ navigation }) {
    return (
        <BoxCenter bg="birlesikKelimeDark">
            <Button
                title="Detaya git"
                onPress={() => navigation.navigate('Detail')}
            />
            <Logo color="white"/>
        </BoxCenter> 
    );
}

export default SearchView;
