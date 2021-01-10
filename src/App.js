// import logo from './logo.svg';
// import './App.css';
import Header from './components/header';
import Routes from './Routes';
import store from './Redux/store';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
        <Provider store={store}>
            <BrowserRouter>
                <Header />
                <Routes />
            </BrowserRouter>
        </Provider>
    </div>
  );
}

export default App;
