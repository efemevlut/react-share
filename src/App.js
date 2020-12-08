import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <AppRouter />
      </AuthContextProvider>
    </div>
  );
}

export default App;
