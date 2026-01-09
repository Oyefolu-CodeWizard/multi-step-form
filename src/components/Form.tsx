import { useAppDispatch, useAppSelector } from "../hooks";
import { setName, setEmail, setTel } from "../features/userSlice";

function Form() {
  const dispatch = useAppDispatch();
  const { name, email, tel, errors } = useAppSelector((state) => state.user);

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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setName(e.target.value))
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setEmail(e.target.value))
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch(setTel(e.target.value))
          }
          required
        />
      </div>
    </form>
  );
}

export default Form;
