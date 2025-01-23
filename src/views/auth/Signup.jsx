import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../utils/validation/SignupValidation';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import ColorMultiSelect from '../../utils/multiselect/ReactMultiSelect';
import Particles from "react-tsparticles";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const finalSubmission = (data) => {
    const formData = new FormData();
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("email", data.email);
    formData.append("mobileNo", data.mobileNo);
    formData.append("gender", data.gender);
    formData.append("hobbies", data.hobbies);
    formData.append("address", data.address);
    if (profileImage) formData.append("profile", profileImage);

    console.log("Form submitted!", formData);

    toast.success("Signup Successful!", {
      duration: 4000,
      position: "bottom-center",
    });
    navigate('/home');
  };

  const handleValidationErrors = () => {
    if (Object.keys(errors).length) {
      toast.error("Please fill all required fields correctly!", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  };

  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
    }
  };

  return (
    <div className="signup-wrapper p-5">
      <div className="title">
        <h1 className='text-white text-center text-[50px]'>Signup Form</h1>
      </div>
      <div className="signup-container max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md h-[75vh] overflow-auto">
        <form onSubmit={handleSubmit(finalSubmission, handleValidationErrors)}>

          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              {...register("firstName")}
              placeholder="Enter first name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="lname" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              {...register("lastName")}
              placeholder="Enter last name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="Enter email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2">
              Mobile No.
            </label>
            <input
              type="tel"
              {...register("mobileNo")}
              placeholder="Enter mobile no."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.mobileNo && (
              <p className="text-red-500 text-sm mt-1">{errors.mobileNo.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
              Select Gender
            </label>
            <select
              {...register("gender")}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="hobbies" className="block text-gray-700 font-medium mb-2">
              Hobbies
            </label>
            <ColorMultiSelect
              onChange={(selectedOptions) => setValue("hobbies", selectedOptions.map(option => option.value))}
            />
            {errors.hobbies && (
              <p className="text-red-500 text-sm mt-1">{errors.hobbies.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="profile" className="block text-gray-700 font-medium mb-2">
              Profile Picture Upload
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImageChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.profile && (
              <p className="text-red-500 text-sm mt-1">{errors.profile.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <textarea
              {...register("address")}
              placeholder="Enter address"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>
            )}
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
