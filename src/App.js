import AppRouter from "./Router/Router";
import AuthContextProvider from "./context/AuthContext";

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
