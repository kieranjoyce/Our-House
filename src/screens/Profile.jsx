import { StyleSheet, View, SafeAreaView, Switch, Dimensions, Pressable, Image, ScrollView  } from "react-native";
import React, { useState } from "react";
import { auth, db } from "../../firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";
import { Avatar, Text, Title, Caption, TouchableRipple} from "react-native-paper";
import  Icon from "react-native-vector-icons/MaterialCommunityIcons";
const {width} = Dimensions.get('screen');

const Profile = ({ navigation }) => {
  const [mode, setMode] = useState(false);
  const user = auth.currentUser;

  const ListOptions = () => {
    const optionsList = [
      {title: 'Your Badges', },
      ]


    return <View style={styles.optionListContainer}>
      {optionsList.map((option, index) => (
        <View style={styles.optionsCard} key={index}>

<Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}>
              {option.title}
            </Text>
        </View>
      ))}
    </View>
  } 

  // const [userInformation, setUserInformation] = useState([]);

  // const docSnap = getDoc(doc(db, "users", user.uid)).then((user) => {
  //   return setUserInformation(user.data());
  // });

  //   console.log(userInformation);

  return (
    <SafeAreaView style={styles.userInfoSection}>
<View style={styles.userInfoSection}>
<View style={{flexDirection: 'row', marginTop: 15}}>
      <Avatar.Image 
        source={{
          uri: "https://previews.123rf.com/images/gmast3r/gmast3r1411/gmast3r141100280/33645487-profile-icon-male-avatar-portrait-casual-person.jpg",
        }}
        size={80}
      />
      <View style={{marginLeft: 20}}>
        <Title style={[styles.title, {
          marginTop:15,
          marginBottom: 5,
        }]}>{user.username}</Title>
        <Caption style={styles.caption}>{user.email}</Caption>
      </View>
    </View>
  </View>

  <View style={styles.userInfoSection}>


    <View styles={styles.row}>
    <Icon name="medal" color="#777777" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>{user.badges_achieved}</Text>
    </View>

<View styles={styles.row}>
    <Icon name="home-account" color="#777777" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>{user.household_id}</Text>
    </View>

    <View styles={styles.row}>
    <Icon name="trophy" color="#777777" size={20}/>
    <Text style={{color:"#777777", marginLeft: 20}}>{user.points}</Text>
    </View>
  </View>

  <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#dddddd',
            borderRightWidth: 1
          }]}>
            <Title>#1</Title>
            <Caption>Household_Northcoders</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>100</Title>
            <Caption>Points</Caption>
          </View>
      </View>

<View style={styles.listWrapper}>
  <TouchableRipple onPress={() => {}}>
    <View style={styles.listItem}>
    <Icon name="washing-machine" color="#777777" size={25}/>
    <Text style={styles.listItemText}>Your Favourite Chores</Text>
    </View>
  </TouchableRipple>

  <Switch value={mode} onValueChange={() => setMode((value) => !value)}/>
<ListOptions />
 

</View>
</SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },

  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },

  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listWrapper: {
    marginTop: 10,
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  listItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
  optionsCard: {
    height: 150,
    // width:  - 30,
    elevation: 15,
    alignItems: 'center',
    backgroundColor: "white",
     borderRadius: 10,
    // paddingTop: 10,
    paddingHorizontal: 10,
  },
  optionListsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },






});


