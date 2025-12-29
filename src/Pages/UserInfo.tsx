import { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

type Errors = {
  name?: string;
  email?: string;
  tel?: string;
};

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\+?[0-9\s\-()]+$/;

function UserInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const [errors, setErrors] = useState<Errors>({});

  const navigate = useNavigate();

  const validateForm = (): boolean => {
    const newErrors: Errors = {};

    if (!name.trim()) {
      newErrors.name = "This field is required";
    } else if (!nameRegex.test(name)) {
      newErrors.name = "Invalid name format";
    }

    if (!email.trim()) {
      newErrors.email = "This field is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!tel.trim()) {
      newErrors.tel = "This field is required";
    } else if (!telRegex.test(tel)) {
      newErrors.tel = "Enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (): void => {
    if (validateForm()) {
      console.log({ name, email, tel });
      console.log("Form submitted successfully");
      navigate("/plan");
    }
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
