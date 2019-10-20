import React from "react";
import Header from "./components/Header";
import Buscador from "./components/Buscador";

import CategoriasProvider from "./context/CategoriasContext";
import EventosProvider from "./context/EventosContext";

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />

        <div className="uk-container">
          <Buscador />

        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
