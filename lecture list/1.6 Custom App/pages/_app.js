import NavBar from "../components/NavBar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <NavBar></NavBar>
      <Component {...pageProps} />
      <span>hello</span>

      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </div>
  );
}
