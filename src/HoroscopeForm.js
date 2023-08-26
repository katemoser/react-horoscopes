import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Col, Button } from "reactstrap";


const ASTROLOGICAL_SIGNS = [
  "aries",
  "taurus",
  "gemini",
  "cancer",
  "leo",
  "virgo",
  "libra",
  "scorpio",
  "sagittarius",
  "capricorn",
  "aquarius",
  "pisces"
];

const defaultFormData = {
  sign: "aries"
};

/**
 * Select your sign
 *
 * props:
 *    handleSave
 *    signs like ["aries", "pisces", ...]
 *    initial formData like {sign}
 *
 * state:
 *    formData like {sign}
 *
 * HoroscopeApp -> Horoscope Display
 */
function HoroscopeForm({
  initialFormData = defaultFormData,
  signs = ASTROLOGICAL_SIGNS,
  handleSave
}) {

  const [formData, setFormData] = useState(initialFormData);

  // handles change and turns to number
  function handleChange(evt) {
    const input = evt.target;
    setFormData((formData) => ({
      ...formData,
      [input.name]: input.value,
    }));
  }

  //Calls function passed to this component
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(defaultFormData);
  }

  return (
    <div className="HoroscopeForm">
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="sign" sm={2}>
            Try it out:
          </Label>
          <Col sm={10}>
            <Input
              name="sign"
              value={formData.seed_id}
              onChange={handleChange}
              type="select"
            >
              {signs.map(sign => (
                <option key={sign} value={sign}>
                  {sign}
                </option>
              ))}
            </Input>
          </Col>
        </FormGroup>

        <FormGroup check row>
          <Col
            sm={{
              offset: 2,
              size: 10,
            }}
          >
            <Button>Submit</Button>
          </Col>
        </FormGroup>
      </Form>
    </div>
  );
}

export default HoroscopeForm;