import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ScrollView, StyleSheet,
    TouchableOpacity, 
    View, Text, 
    Image, ImageBackground, 
    TextInput} from 'react-native'

const Home = () => {
    return (
        <ImageBackground
        source ={require('../images/back.jpg')}
        style={{width:'100%', height:'100%'}}
        >
            <View
             style={{
                 flexDirectioin:'row',
                 marginTop:40,
                 alignItems:'center',
                 paddingHorizontal:40
             }}
            >
            <Icon name="menu" size={30} color ="#a2a2db" style={{width:20}} />
            <Icon name="account-circle" size={33} color ="#a2a2db" style={{marginLeft:230}} />
            </View>

            <View sytle={{paddingHorizontal:40, marginTop:25}}>
                <Text
                  style={{
                      marginLeft:10,
                      fontSize:55,
                      color:'#fff',
                      fontFamily:'RbotoBold'
                  }}
                >Hello!</Text>

                <Text style={{
                    marginLeft:10,
                    fontSize:13,
                    paddingVertical:10,
                    paddingRight:80,
                    lineHeight:22,
                    fontFamily:'RobotRegular',
                    color:'#121212'
                }}>
                    いろいろなセミナーに参加出来るビデオ・ストリーミングアプリ
                </Text>
           
            <View style={{
                marginLeft:10,
                marginRight:10,
                flexDirection:'row',
                backgroundColor:'#FFF',
                borderRadius:35,
                alignItems:'center',
                paddingVertical:5,
                paddingHorizontal:20,
                marginTop:30
            }}>
                <Image source={require('../images/search.png')} style={{height:16, width:16}}/>
                <TextInput 
                   placeholder='dededed'
                   style={{paddingHorizontal:23, fontSize:15, color:'#ccccef'}} />

            </View>

            <ScrollView
             horizontalshowsHorizontalScrollIndicator={false}
             style={{marginRight:-40, marginTop:30}}
            >
                <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    height:66, 
                    width:66,
                    marginLeft:10,
                    borderRadius:50,
                    backgroundColor:'#5facdb'}}>
                      
                      <Image 
                        source ={require('../images/p.png')}/>
                </View>

                <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    height:66, 
                    width:66,
                    marginLeft:10,
                    borderRadius:50,
                    backgroundColor:'#5facdb'}}>
                      
                      <Image 
                        source ={require('../images/p.png')}/>
                </View>
                
            </ScrollView>

           <Text style={{
               color:'#fff',
               marginTop:50,
               fontSize:17
           }}> おすすめ </Text>

           <ScrollView　
           horizontal
           showsHorizontalScrollIndicator={false}
           style={{marginHorizontal:-40, marginTop:30}}>

               <View style={{flexDirection:'row',
               width:150,
            alignItems:'center'}}>
                <View>
                    
                </View>
            </View>



           </ScrollView>




            </View>
          
        </ImageBackground>
    )
}

export default Home

const styles = StyleSheet.create({})

