import { useForm } from "react-hook-form";
import styled from "styled-components";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <Input
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Name must only contain letters and spaces",
              },
            })}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          <label>E-mail</label>

          <Input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email",
              },
            })}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}

          <label>Password</label>

          <Input
            placeholder="Password"
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password.message}</p>
          )}
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      {/* <Child {...data} /> */}
    </div>
  );
}

export default App;
const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-radius: 5px;
  text-indent: 1rem;
`;
const Button = styled.button`
  width: 30%;
  height: 2.5rem;
  margin: 0 auto;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;
const Container = styled.div`
  width: 25rem;
  height: 15rem;
  /* background-color: lightblue; */
`;
