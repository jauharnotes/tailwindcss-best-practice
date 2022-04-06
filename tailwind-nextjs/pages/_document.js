import { Html, Head, Main, NextScript } from 'next/document';
import useGlobalDarkModeState from '../components/DarkMode';

export default function Document(props) {
  const {darkMode, setDarkMode} = useGlobalDarkModeState();
  
  return (
    <Html className='scroll-smooth'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
