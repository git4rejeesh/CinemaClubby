import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity ,Dimensions} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Ionicons from 'react-native-vector-icons/Ionicons';

const {height,width} = Dimensions.get('window');
const ViewBackgroundColor = '#8533ff'
const ImageBackgroundColor = '#8080ff'


class InsightScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Insight!</Text>
      </View>
    );
  }
}

class ToolScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Tool!</Text>
      </View>
    );
  }
}

class WalletScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, backgroundColor:'#d7d7c1'}}>
        <View style={{backgroundColor:ImageBackgroundColor, justifyContent:'space-between', borderBottomRightRadius:20, borderBottomLeftRadius:20, height:200}}>
          
          <View style={{backgroundColor:ImageBackgroundColor, flexDirection:'row', justifyContent:'space-between', height:40, width:width, borderBottomRightRadius:20, borderBottomLeftRadius:20}}>
            <TouchableOpacity style={{alignItems:'center', top:10, justifyContent:'center', height:40, width:40, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/menu.png')} style={{marginLeft:5, marginTop:4, height:20,width:20}}/>
            </TouchableOpacity>          
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', height:60,width:60, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/notification.png')} style={{marginLeft:5, marginTop:4, height:20,width:20}}/>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', backgroundColor:ImageBackgroundColor, alignItems:'flex-start', height:60, width:width}}>
            <Image source={require('./images/selena.png')} style={{ marginLeft:10, borderColor:'white', borderWidth:1, borderRadius:30, height:60,width:60}}/>
            <View style={{marginLeft:10, marginTop:10, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Ika Puspita Sari</Text>
              <Text style={{color:'white', fontSize:13, fontWeight:'bold'}}>@ikapuspitasari88</Text>
            </View>            
          </View>

          <View style={{flexDirection:'row', backgroundColor:ImageBackgroundColor, justifyContent:'space-between', borderBottomRightRadius:20, borderBottomLeftRadius:20, height:80, width:width}}>
          </View>

        </View>


        <View style={{zIndex:50, borderRadius:10, backgroundColor:'white',height:height*0.21, width:width*0.9, top:120, left:width*.05, position:'absolute', alignItems:'center'}}>
          <View style={{flexDirection:'row', borderTopLeftRadius:10, borderTopRightRadius:10, height:50, width:width*0.9, borderColor:'grey', borderWidth:1, justifyContent:'space-between'}}>
            <Text style={{color:'grey', paddingLeft:10, paddingRight:10, paddingTop:5, fontSize:18, fontWeight:'bold'}}>My Balance</Text>
            <Text style={{color:'black', paddingLeft:10, paddingRight:10, paddingTop:5, fontSize:18, fontWeight:'bold'}}>Rp 1.000.000</Text>
          </View>
        
          <View style={{ flexDirection:'row', justifyContent:'space-between', top:20, height:60, width:width*0.8}}>
            <TouchableOpacity style={{alignItems:'center', height:60,width:60, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/send.png')} style={{marginLeft:5, height:30,width:30}}/>
              <Text style={{color:'black', paddingTop:5, fontWeight:'bold', fontSize:14}}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center', height:60,width:60, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/payment.png')} style={{marginLeft:5, height:30,width:30}}/>
              <Text style={{color:'black', paddingTop:5, fontWeight:'bold', fontSize:14}}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center', height:60,width:60, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/topup.png')} style={{marginLeft:5, height:30,width:30}}/>
              <Text style={{color:'black', paddingTop:5, fontWeight:'bold', fontSize:14}}>Top Up</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center', height:60,width:60, paddingLeft:5, paddingRight:5}}>
              <Image source={require('./images/request.png')} style={{marginLeft:5, height:30,width:30}}/>
              <Text style={{color:'black', paddingTop:5, fontWeight:'bold', fontSize:13}}>Request</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{zIndex:50, top:125+height*0.21, height:height*0.23, width:width*0.9, left:width*.05, position:'absolute', alignItems:'center'}}>
          <View style={{flexDirection:'row', justifyContent:'space-between', height:50, width:width*0.9}}>
            <TouchableOpacity style={{flexDirection:'row',  alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/shopping.png')} style={{marginLeft:5,  height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>E-Shopping</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/billpayment.png')} style={{marginLeft:5, marginTop:4, height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>Bill Payment</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between', height:50, width:width*0.9}}>
            <TouchableOpacity style={{flexDirection:'row',  alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/charity.png')} style={{marginLeft:5,  height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>Charity</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/gift.png')} style={{marginLeft:5, marginTop:4, height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>Send Gift</Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection:'row', justifyContent:'space-between', height:50, width:width*0.9}}>
            <TouchableOpacity style={{flexDirection:'row',  alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/bill.png')} style={{marginLeft:5,  height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>Split Bills</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', height:60, width:150}}>
              <Image source={require('./images/cashback.png')} style={{marginLeft:5, marginTop:4, height:30,width:30}}/>
              <Text style={{color:'black', paddingLeft:5, fontWeight:'bold', fontSize:14}}>Cash Back</Text>
            </TouchableOpacity>
          </View>

        </View>

        <View style={{flexDirection:'row', top:80+height*0.21, height:30, left:width*.05, width:width*0.9, justifyContent:'space-between'}}>
            <Text style={{color:'black', paddingLeft:10, paddingRight:10, paddingTop:5, fontSize:18, fontWeight:'bold'}}>Promo</Text>
            <Text style={{color:'black', paddingLeft:10, paddingRight:10, paddingTop:5, fontSize:18, fontWeight:'bold'}}>></Text>
        </View>

        <View  style={{flexDirection:'row', borderRadius:10, alignItems:'flex-start', left:width*.05, width:width*0.6, top:80+height*0.21, height:100}}>
          <View style={{flexDirection:'row', backgroundColor:ImageBackgroundColor, borderRadius:10, alignItems:'flex-start', width:width*0.8, height:100}}>
            <Image source={require('./images/savings.png')} style={{ marginLeft:10, marginTop:10, borderColor:'white', borderWidth:1, borderRadius:30, height:60,width:60}}/>
            <View style={{marginLeft:10, marginTop:20, alignItems:'flex-start', height:60}}>
              <Text style={{color:'white', fontSize:16, fontWeight:'bold'}}>Saving Account</Text>
              <Text style={{color:'white', height:40, fontSize:13, fontWeight:'bold'}}>Get up to 10% monthly interest!</Text>
            </View>            
          </View>
          <View style={{backgroundColor:ViewBackgroundColor, marginLeft:5, borderBottomLeftRadius:10, borderTopLeftRadius:10, width:width*0.09, height:100}}>
          </View>

        </View>

      </View>
    ); 
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator(

{
  Wallet: WalletScreen,
  Insight: InsightScreen,
  Tool: ToolScreen,
});

export default createAppContainer(TabNavigator);

