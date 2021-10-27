import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';


export default class App extends Component {
  render() {
    const runFirst = `
      window.isNativeApp = true;
      
      
      true; // note: this is required, or you'll sometimes get silent failures
    `;

    const run = `
      //document.body.style.backgroundColor = 'blue';
      document.querySelector('.topic-block').style.display = "none";
      document.querySelector('.section-footer').style.display = "none";
      true;
    `;
    setTimeout(() => {
      this.webref.injectJavaScript(run);
    }, 1000);

    return (
      <SafeAreaView style={styles.container}>
       <StatusBar
        
        backgroundColor="#7A1D19"
        
        
         />
        <WebView style={{marginTop:25}}
          ref={(r) => (this.webref = r)}

          source={{
            uri: 'https://mgurman.ru',
          }}
          injectedJavaScriptBeforeContentLoaded={runFirst}
          onNavigationStateChange={this.handleWebViewNavigationStateChange}

        />
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
    flex: 1,
    
  },
});
