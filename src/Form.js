import "./index";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <form id="search-form">
        <input type="text" id="city-input" />
        <button type="button" id="search" class="btn btn-light">
          Search
        </button>
      </form>
    </div>
  );
}
