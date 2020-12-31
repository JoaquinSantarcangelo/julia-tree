import "../sass/index.sass";
import "../sass/Hub.sass";
import "../sass/Video.sass";
import "../sass/Home.sass";
import "../sass/Menu.sass";

function MyApp({ Component, pageProps }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : <Component {...pageProps} />}
    </div>
  );
}

export default MyApp;
