import { useAppDispatch, useAppSelector } from "../hooks";
import { setErrors } from "../features/userSlice";
import { useNavigate } from "react-router-dom";
import { validateForm } from "../Utils/validateForm";
import Button from "../components/Button";
import Form from "../components/Form";

function UserInfo() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { name, email, tel } = useAppSelector((state) => state.user);

  const handleSubmit = (): void => {
    const validationErrors = validateForm(name, email, tel);

    dispatch(setErrors(validationErrors));

    if (Object.keys(validationErrors).length === 0) {
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

        <Form />

        <div className="user-button">
          <Button type="next" onClick={handleSubmit}>
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
