import Form from 'react-bootstrap/Form';
import "./Filters.css"

function SelectBasicExample(prop) {
  return (
    <Form.Select aria-label="Default select example">
      <option> {prop.title} </option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>
  );
}

export default SelectBasicExample;
