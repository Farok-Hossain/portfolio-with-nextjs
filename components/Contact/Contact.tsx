"use client";

import { resolve } from "path";
import { useForm } from "react-hook-form";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const Contact = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(data);
      throw new Error();
    } catch (error) {
      setError("root", {
        message: "This email is already taken",
      });
    }
  };

  return (
    <div>
      <h1 className="text-3xl text-green-500">Contact With Me</h1>
      <form action="" className="w-full" onSubmit={handleSubmit(onSubmit)}>
        <label>Your Name:</label>
        <input
          className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          {...register("name")}
          type="text"
        />
        <label>Your Email:</label>
        <input
          className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
          })}
          type="email"
        />
        {errors.email && (
          <p className="text-sm text-red-600">Please provide a valid email</p>
        )}
        <label>Message</label>
        <textarea
          name="message"
          required={true}
          className="bg-[#10172d] w-full h-20 border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
        />
        <button disabled={isSubmitting} type="submit">
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
