import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  console.log(Component);

  //layout defined at page level
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
