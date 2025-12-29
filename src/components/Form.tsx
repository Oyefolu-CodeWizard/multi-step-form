type Errors = {
  name?: string;
  email?: string;
  tel?: string;
};

type FormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  tel: string;
  setTel: React.Dispatch<React.SetStateAction<string>>;
  errors: Errors;
  setErrors: React.Dispatch<React.SetStateAction<Errors>>;
};

function Form({
  name,
  setName,
  email,
  setEmail,
  tel,
  setTel,
  errors,
  setErrors,
}: FormProps) {
  return (
    <form action="" className="info-form">
      <div>
        <label htmlFor="name">Name</label>
        {errors.name && <span className="error">{errors.name}</span>}
        <br />
        <input
          type="text"
          id="name"
          className={errors.name ? "input-error" : ""}
          placeholder="e.g. Stephen King"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setName(e.target.value);
            setErrors((prev) => ({ ...prev, name: undefined }));
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="email">Email Address</label>
        {errors.email && <span className="error">{errors.email}</span>}
        <br />
        <input
          type="email"
          id="email"
          className={errors.email ? "input-error" : ""}
          placeholder="e.g. stephenking@lorem.com"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
            setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          required
        />
      </div>

      <div>
        <label htmlFor="number">Phone Number</label>
        {errors.tel && <span className="error">{errors.tel}</span>}
        <br />
        <input
          type="tel"
          id="number"
          className={errors.tel ? "input-error" : ""}
          placeholder="e.g. +1 234 567 890"
          value={tel}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTel(e.target.value);
            setErrors((prev) => ({ ...prev, tel: undefined }));
          }}
          required
        />
      </div>
    </form>
  );
}

export default Form;
