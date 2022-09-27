import Header from "containers/layout/header/header";
import AppRoutes from "routes";
import "shared/assets/styles/main.scss";

function App() {
  return (
    <div className="app">
      <Header/>
      <AppRoutes />
    </div>
  );
}

export default App;
