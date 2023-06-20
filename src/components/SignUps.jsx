<>
  <div className="row">
    <form className="col">
      <div className="form-group row">
        <div className="col">
          <input type="text" className="form-control" placeholder="Prénom" />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Nom de famille"
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="form-group col">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Número de mobille ou e-mail"
          />
        </div>
      </div>

      <label for="labelDateDeNaissance">Date de naissance</label>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />
      <div class="custom-control custom-radio custom-control-inline">
        <label for="labelGenre">Genre</label>
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="customRadioInline1">
          Femme
        </label>
      </div>
      <div class="custom-control custom-radio custom-control-inline">
        <input
          type="radio"
          id="customRadioInline1"
          name="customRadioInline1"
          class="custom-control-input"
        />
        <label class="custom-control-label" for="customRadioInline1">
          Homme
        </label>
      </div>
      <div className="form-group">
        <input
          type="file"
          className="form-control-file"
          id="exampleFormControlFile1"
        />
      </div>
      <small id="emailHelp" className="form-text text-muted">
        En cliquant sur S'inscrire
      </small>
      <button type="submit" className="btn btn-primary">
        S'inscrire
      </button>
    </form>
  </div>
  <div className="col">
    <img src="..." alt="..." class="img-circle" />
  </div>
</>;
