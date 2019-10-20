import React, { Component } from "react";
import { CategoriasConsumer } from "../context/CategoriasContext";
import { EventosConsumer } from "../context/EventosContext";

class Buscador extends Component {
  state = {
    nombre: '',
    categoria: ''
  };

  //si el usuario añade un evento
  obtenerDatosDelEvento = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventosConsumer>
        {value => {
          console.log(value);
          return (
            <form
            onSubmit={e =>{
                e.preventDefault();
                value.obtenerEventos(this.state);
            }}
            >
              <fieldset className="uk-fieldset uk-margin">
                <legend className="uk-legend uk-text-center">
                  Busca tu evento por nombre o categoría
                </legend>
              </fieldset>
              <div className="uk-column-1-3@m uk-margin">
                <div className="uk-margin" uk-margin="true">
                  <input
                    name="nombre"
                    className="uk-input"
                    type="text"
                    placeholder="nombre de evento o ciudad"
                    onChange={this.obtenerDatosDelEvento}
                  />
                </div>
                <div className="uk-margin" uk-margin="true">
                  <select
                    className="uk-select"
                    name="categoria"
                    onChange={this.obtenerDatosDelEvento}
                  >
                    <option value="">--Selecciona cataegoría--</option>
                    <CategoriasConsumer>
                      {value => {
                        return value.categorias.map(categoria => (
                          <option
                            key={categoria.id}
                            value={categoria.id}
                            data-uk-form-select
                          >
                            {categoria.name_localized}
                          </option>
                        ));
                      }}
                    </CategoriasConsumer>
                  </select>
                </div>
                <div className="uk-margin" uk-margin="true">
                  <input
                    className="uk-button uk-button-danger"
                    type="submit"
                    value="Buscar eventos"
                  />
                </div>
              </div>
            </form>
          );
        }}
      </EventosConsumer>
    );
  }
}

export default Buscador;
