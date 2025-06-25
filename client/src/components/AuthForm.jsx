import { useState } from "react";

function AuthForm({ onSubmit, isLogin = false }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col  justify-center items-center  w-70 p-7  gap-5">
        {!isLogin && (
          <input
            className="border border-gray-600 py-1 px-2 rounded"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          className="border border-gray-600 py-1 px-2 rounded"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="border border-gray-600 py-1 px-2 rounded"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button 
          className="bg-blue-800 px-4 py-1 flex justify-center items-center rounded-sm text-gray-300 hover:bg-blue-500"
          type="submit">{isLogin ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default AuthForm;
