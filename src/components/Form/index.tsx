import React from "react";
import Button from "../Button";

class Form extends React.Component {
  render(): React.ReactElement {
    return (
      <form>
        <div>
          <label htmlFor="">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            id="tarefa"
            placeholder="O que você deseja estudar?"
          />
        </div>
        <div>
          <label htmlFor="">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button />
      </form>
    );
  }
}

export default Form;
