// "use client";

import { useForm } from "react-hook-form";

const ContactForm = () => {
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
      setError("root", {});
    }
  };
  return (
    <div>
      <h1 className="text-2xl uppercase text-green-500">Contact with me</h1>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return "Email must include @";
              }
              return true;
            },
            // pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          type="text"
          placeholder="Email"
          className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
        />
        <h1 className="text-red-500">hello</h1>
        {errors.email && (
          <div className="text-red-600">{errors.email.message}</div>
        )}
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
          })}
          type="password"
          placeholder="Password"
          className="border border-green-600 border-b-orange-600 mr-3 rounded-md"
        />
        {errors.password && (
          <div className="text-red-600">{errors.password.message}</div>
        )}
        <button
          disabled={isSubmitting}
          className="btn btn-secondary"
          type="submit"
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
        {errors.root && (
          <div className="text-red-600">{errors.root.message}</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;

// import { useState } from "react";
// import { TbMailForward } from "react-icons/tb";

// const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmitt = (e) => {
//     e.preventDefault();
//     console.log(name, email, message);
//   };

//   <h1 className=" mb-5 text-green-500 text-2xl uppercase">
//         Contact With Mee
//       </h1>
//       <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
//         <p className="text-sm text-[#d3d8e8]">
//           {
//             "If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."
//           }
//         </p>
//         <div className="mt-6 flex flex-col gap-4">
//           <div className="flex flex-col gap-2">
//             <form action="" className="w-full" onSubmit={handleSubmitt}>
//               <label>Your Name:</label>
//               <input
//                 className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <label>Your Email:</label>
//               <input
//                 className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <label>Your Message</label>
//               <input
//                 className="bg-[#10172d] w-full h-20 border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 mb-5"
//                 type="text"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button
//                 className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
//                 type="submit"
//               >
//                 <span>Send Message</span>
//                 <TbMailForward className="mt-3 mb-3" size={18} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
