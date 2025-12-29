type Errors = {
  name?: string;
  email?: string;
  tel?: string;
};

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telRegex = /^\+?[0-9\s\-()]+$/;

function validateForm(name: string, email: string, tel: string): Errors {
  const errors: Errors = {};

  if (!name.trim()) {
    errors.name = "This field is required";
  } else if (!nameRegex.test(name)) {
    errors.name = "Invalid name format";
  }

  if (!email.trim()) {
    errors.email = "This field is required";
  } else if (!emailRegex.test(email)) {
    errors.email = "Enter a valid email address";
  }

  if (!tel.trim()) {
    errors.tel = "This field is required";
  } else if (!telRegex.test(tel)) {
    errors.tel = "Enter a valid phone number";
  }

  return errors;
}

export { validateForm };
