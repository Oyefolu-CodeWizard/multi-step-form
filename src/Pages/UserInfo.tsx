import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { validateForm } from "../Utils/validateForm";

type Errors = {
  name?: string;
  email?: string;
  tel?: string;
};

function UserInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const handleSubmit = (): void => {
    const validationErrors = validateForm(name, email, tel);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log({ name, email, tel });
      console.log("Form submitted successfully");
      navigate("/plan");
    }

    // if (validateForm()) {
    //   console.log({ name, email, tel });
    //   console.log("Form submitted successfully");
    //   navigate("/plan");
    // }
  };

  return (
    <div className="user-info">
      <div className="info-container">
        <div className="form-header">
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </div>

        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          tel={tel}
          setTel={setTel}
          errors={errors}
          setErrors={setErrors}
        />

        <Button type="next" onClick={handleSubmit}>
          Next Step
        </Button>
      </div>
    </div>
  );
}

export default UserInfo;
