import './App.css';
import Header from './components/Header';
import Welcome from './components/welcome/welcome';
import LoginWithSocial from './components/loginWithSocial/LoginWithSocial';

function App() {
  return (
    <body>
      <Header></Header>
      <main className="mainContent">
        <Welcome></Welcome>
        <LoginWithSocial></LoginWithSocial>
      </main>
    </body>
  );
}

export default App;
