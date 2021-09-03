import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableHighlight,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";

import Item from "../../components/Item";
import { ButtonFilter } from "../../components/ButtonFilter";
import { FActionButton } from "../../components/FActionButton";
import { Timer } from "../../components/Timer";

import api from "../../services/api";
import { filterButtonsData } from "../../data/filterButtonsData";
import { theme } from "../../global/styles/theme";

import styles from "./styles";

export function Home() {
  const mountedRef = useRef(true); // this is to ensure the useRef is unmounted
  const flatList = useRef<FlatList>(null); // ref to flatList items
  const [fullData, setFullData] = useState([]); // data from api
  const [filter, setFilter] = useState("*"); // selected filter
  const [filteredData, setFilteredData] = useState([]); // data after filtered
  const [reload, setReload] = useState(false); // to reload data (useEffect get from api)
  const [error, setError] = useState(false); // to show error if api call fails
  const [isLoading, setIsLoading] = useState(false); // to show loading while api is loading

  useEffect(() => {
    const apiCall = async () => {
      const getData = await api
        .get("store/get")
        .then((res) => {
          // to remove msg of screen when GET response is ok
          setError(false);
          setIsLoading(false);

          // ordering by Descend
          const orderByDesc = res.data.data.sort(
            (a: any, b: any) => b.store.cost - a.store.cost
          );
          return orderByDesc;
        })
        .catch(() => {
          // if error set error true to show message to user
          setError(true);
        });

      setFullData(getData);
      setFilteredData(getData);
    };

    setFilter("*"); // give color to selected item
    setIsLoading(true);
    apiCall();

    return () => {
      // this is to ensure the useEffect is unmounted
      mountedRef.current = false;
    };
  }, [reload]);

  useEffect(() => {
    if (filter === "*") {
      // return all without filter
      setFilteredData(fullData);
    } else if (filter === "other") {
      // filter "fullData" and verify if (fullData.item.type) not(!) exists in "filterButtonsData" types.
      const aux = fullData.filter(
        (i: any) => !filterButtonsData.some((e) => i.item.type === e.type)
      );
      setFilteredData(aux);
    } else {
      // filter "fullData" and return only if the (fullData.item.type) is equals a "filter"
      const aux = fullData.filter((i: any) => i.item.type === filter);
      setFilteredData(aux);
    }

    // scroll to top if user change filter in mid-bot of flatList
    handleScrollFab();

    return () => {
      // this is to ensure the useEffect is unmounted
      mountedRef.current = false;
    };
  }, [filter]);

  function handleScrollFab() {
    if (flatList.current) {
      //set offset(distance) to selected index 0
      flatList?.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }

  // only to change useEffect dependence and reload API call
  function handleReloadIfError() {
    setReload(!reload);
  }

  return (
    <LinearGradient colors={theme.gradients.home} style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Daily Store</Text>
        <Timer timerReloadBtn={handleReloadIfError} />

        {error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>
              An error has been encountered. Try again!
            </Text>
            <TouchableHighlight
              style={styles.errorIconContainer}
              onPress={handleReloadIfError}
              underlayColor="#83909e"
            >
              <MaterialCommunityIcons name="reload" size={40} color="white" />
            </TouchableHighlight>
          </View>
        ) : isLoading ? (
          <ActivityIndicator
            style={styles.errorContainer}
            size={50}
            animating={true}
            color={"#fff"}
          />
        ) : (
          <>
            <FlatList
              keyExtractor={(i) => i.name}
              data={filterButtonsData}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 10,
                flexGrow: 1,
                justifyContent: "center",
              }}
              style={{ flexGrow: 1, marginTop: 20, height: 50 }}
              renderItem={(i) => (
                <ButtonFilter
                  onPressItem={() => setFilter(i.item.type)}
                  item={i.item}
                  isSelected={filter === i.item.type}
                />
              )}
            />

            <FlatList
              ref={flatList}
              data={filteredData}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                alignItems: "center",
                paddingTop: 70,
                flexGrow: 1,
              }}
              keyExtractor={(i) => i.itemId}
              renderItem={(i) => (
                <Item
                  marginB={i.index % 2 === 0 ? false : true}
                  img={
                    i.item.item.images.featured
                      ? i.item.item.images.featured
                      : i.item.item.images.icon
                  }
                  name={i.item.item.name}
                  price={i.item.store.cost}
                  type={
                    i.item.item.series ? i.item.item.series : i.item.item.rarity
                  }
                  desc={i.item.item.description}
                  rating={i.item.item.ratings.avgStars}
                />
              )}
            />
            <FActionButton onPress={handleScrollFab} />
          </>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
}
