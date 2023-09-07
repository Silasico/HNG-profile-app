import WebView from "react-native-webview"

const WebScreen = () => {
  return (
    <WebView
      source = {{uri: "https://github.com/Silasico"}}
      style = {{flex: 1}}
    />
  )
}

export default WebScreen