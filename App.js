import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View, Pressable } from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-ico-material-design';


var iconWidth = 24;
var iconHeight = 24;
var iconColor = '#F1C74B';

export default class App extends Component {
  state = {
    targetUrl : 'https://mgurman.ru'
    
   }

   changeUrl = (url) => {
console.log(url + " is changed");
this.setState({
  targetUrl: url

      
})

   }








  render() {
    const runFirst = `
      window.isNativeApp = true;
      
      
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    const run = `
      //document.body.style.backgroundColor = 'blue';
      document.querySelector('.topic-block').style.display = "none";
      document.querySelector('.section-footer').style.display = "none";
      document.querySelector('.header-top').style.display = "none";
      true;
    `;
    setTimeout(() => {
      this.webref.injectJavaScript(run);
    }, 0);

    return (
      <SafeAreaView style={styles.container}>
       <StatusBar
        
        backgroundColor="#7A1D19"
        
        
         />
        <WebView style={styles.webView}
          ref={(r) => (this.webref = r)}

          source={{
            uri: this.state.targetUrl,
          }}
          injectedJavaScriptBeforeContentLoaded={runFirst}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}

        />

<View style={[styles.NavContainer, styles.elevation]}>

  <View style={[styles.NavBar]}>

    <Pressable onPress={() => {this.changeUrl('https://mgurman.ru')}} style={[styles.IconBehave]} android_ripple={{borderless:true, radius:50}}>


        <Icon name="home-button" height={iconHeight} width={iconWidth} color={iconColor}/>
          
    </Pressable>

    <Pressable onPress={() => {this.changeUrl('https://mgurman.ru/customer/info')}} style={[styles.IconBehave]} android_ripple={{borderless:true, radius:50}}>

        <Icon name="user-shape" height={iconHeight} width={iconWidth} color={iconColor} />
         

    </Pressable>

    <Pressable onPress={() => {this.changeUrl('https://mgurman.ru/wishlist')}} style={[styles.IconBehave]} android_ripple={{borderless:true, radius:50}}>

        <Icon name="favorite-heart-button" height={iconHeight} width={iconWidth} color={iconColor} />

    </Pressable>

    <Pressable onPress={() => {this.changeUrl('https://mgurman.ru/cart')}} style={[styles.IconBehave]} android_ripple={{borderless:true, radius:50}}>

        <Icon name="shopping-cart" height={iconHeight} width={iconWidth} color={iconColor} />

    </Pressable>

  </View>
</View>





      </SafeAreaView>
    );
  }
  handleWebViewNavigationStateChange = (newNavState) => {
   
    const { url } = newNavState;
    if (!url) return;

    if (url.includes('https://mgurman.ru')) {
      
      const hideBlocks = `
      //document.body.style.backgroundColor = 'blue';
      document.querySelector('.topic-block').style.display = "none";
      document.querySelector('.section-footer').style.display = "none";
      document.querySelector('.breadcrumb-mobile').style.display = "none";
      document.querySelector('.category-description').style.display = "none";
      true;
    `;

      this.webref.injectJavaScript(hideBlocks);
    }

    
    if (url.includes('https://mgurman.ru/')) {
      
      const hideBlocks5 = `
      
      document.querySelector('.section-footer').style.display = "none";
      document.querySelector('.header-top').style.display = "none";
      document.querySelector('.category-description').style.display = "none";
      true;
    `;

      this.webref.injectJavaScript(hideBlocks5);
    }

    
    if (url.includes('login')) {
      
      const hideBlocks1 = 'document.querySelector(\'.section-footer\').style.display = "none"';
      this.webref.injectJavaScript(hideBlocks1);
    }

    if (url.includes('wishlist')) {
      
      const hideBlocks2 = 'document.querySelector(\'.section-footer\').style.display = "none"';
      this.webref.injectJavaScript(hideBlocks2);
    }

    if (url.includes('cart')) {
      
      const hideBlocks3 = 'document.querySelector(\'.section-footer\').style.display = "none"';
      this.webref.injectJavaScript(hideBlocks3);
    }

    if (url.includes('onepagecheckout')) {
      
      const hideBlocks4 = 'document.querySelector(\'.section-footer\').style.display = "none"';
      this.webref.injectJavaScript(hideBlocks4);
    }

    
  };



}

const styles = StyleSheet.create({
  container: {
    flex:1,
    //height:'80%'
    
  },
  webView: {
    flex:0.93,
    marginTop:25

  },


  NavContainer: {
    flex: 0.07,
    backgroundColor:'#99241F',
    borderTopWidth:1,
    borderTopColor:"rgba(52,58,64,.1)",
    alignItems:'center',
    position: 'absolute',
    bottom: 0,


    },


    elevation: {
      elevation: 20,
      shadowColor: '#000',

    },
    NavBar: {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-evenly',
      alignItems:'center',
      backgroundColor:'#99241F'    
    },


    IconBehave: {

      padding: 20,
      

    }
});
