//importing dependencies
import * as React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Button, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {Header, Badge, Input, ListItem, Icon} from 'react-native-elements';
import firebase from 'firebase';
import db from '../config';

//importing icons
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

export default class IDCardScreen extends React.Component{
constructor(){
    super();
    this.state = {
        IDCardBlogs: [],
        category: 'ID Card',
        isLoading: false,
    }
    this.blogRef = null;
}

getAllBlogs = () => {
    this.blogRef = db
      .collection("id_card_blogs")
      .where("category", "==", this.state.category)
      .onSnapshot(snapshot => {
        var IDCardBlogs = snapshot.docs.map(document => document.data());
        this.setState({
          IDCardBlogs: IDCardBlogs,
          isLoading : true,
        });
      });
  };

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => (
    <TouchableOpacity
    onPress = {()=>{
      this.props.navigation.navigate("IDCardData",{data:item})
    }}>
    <ListItem
      key={i}
      title={item.topic}
      subtitle={item.matter .split('').splice(0,100).join('') + '.....'}
      //titleStyle={styles.titleStyle}
      //subtitleStyle = {styles.subtitle}
      //containerStyle = {styles.list}
      rightElement = {
        <TouchableOpacity>
          <AntDesign name="right" size={30} color="white" />
        </TouchableOpacity>
      }
      bottomDivider
    />

    </TouchableOpacity>
  );

  componentDidMount() {
    this.getAllBlogs();
  }

  render() {
    if(this.state.isLoading){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={"#00adb5"}
          containerStyle={styles.header}
          centerComponent={{
            text: "ID Cards",
            style: {flex: 0,color: "#fff",fontWeight: "bold",fontStyle: "italic",fontSize: RFValue(30)
            }
          }}
        />
        <View style={{ flex: 0.88, borderWidth: 2 }}>
          {
          this.state.IDCardBlogs.length === 0 
          ? (
            <View>
              <Text style={styles.buttonText}>No Blogs Available</Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={this.keyExtractor}
              data={this.state.IDCardBlogs}
              renderItem={this.renderItem}
            />
          )
          }
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate("Forum");
          }}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
          <FontAwesome5 name="home" size={50} color="black" />
        </TouchableOpacity>
      </View>
    );
        }
        //Making the loading symbol
        else{
          return(
            <View style = {{flex:1,backgroundColor:"#222831",alignItems:'center',justifyContent : 'center'}}>
                <Text style = {{fontSize : RFValue(100), color:'white'}}>Loading</Text>
                <ActivityIndicator 
                size = 'large'
                color = "white"
                animating = {true}
                style = {styles.container2}/>
            </View>
        )
        }
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:RFValue(-15),
    },
    button: {
      width:RFValue(150),
      alignSelf : 'center',
      backgroundColor: "#00adb5",
      borderWidth: RFValue(2),
      borderColor: "#fff",
      justifyContent: "center",
      alignItems: "center",
      marginTop: RFValue(20),
      borderRadius: RFValue(5)
    },
    buttonText: {
      fontWeight: "bold",
      color: "#fff",
      fontSize: RFValue(20),
      fontStyle: "italic",
      alignItems: "center"
    },
    inputBox: {
      backgroundColor: "#00adb5",
      borderColor: "#eeeeee",
      borderRadius: RFValue(5),
      borderWidth: RFValue(2),
      width: RFValue(300),
      height: RFValue(50),
      marginTop: RFValue(5)
    },
    header: {
      flex: 0.12,
      width: RFValue(500)
    },
    titleStyle: {
      fontSize: RFValue(25),
      textAlign: "center",
      color:'#ffffff',
      fontWeight : 'bold',
      fontStyle : 'italic'
    },
    list : {
      alignSelf : 'center',
      width : RFValue(350),
      opacity:1,
      backgroundColor: '#00adb5',
    },
    subtitle: {
      fontSize: RFValue(17),
      textAlign: "center",
      color:'#ffffff',
    },
  });