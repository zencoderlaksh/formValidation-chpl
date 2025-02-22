import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema } from '../../utils/validation/SignupValidation';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";
import ColorMultiSelect from '../../utils/multiselect/ReactMultiSelect';
import Particles from "react-tsparticles";
import { AiFillEnvironment } from "react-icons/ai";
import { AiFillPhone } from "react-icons/ai";
import { BsBackpack4Fill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { CgGenderFemale } from "react-icons/cg";
import { CgProfile } from "react-icons/cg";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from "react-hook-form";




const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    resolver: zodResolver(signupSchema),
     defaultValues: {
      dateOfBirth: null,
    },
  });

  const [profileImage, setProfileImage] = useState(null);
  const navigate = useNavigate();

  const finalSubmission = (data) => {
    console.log("Form submitted!", data);

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
      setProfileImage(URL.createObjectURL(file)); 
    }
  };

  return (
    <div className="signup-wrapper p-5 flex justify-center items-center ">
      <div className="signup-container max-w-4xl w-full p-6 bg-white rounded-lg shadow-md flex h-[89vh] overflow-auto">
        
        {/* Left Section: Profile Image Showcase */}
        <div className="profile-image-section w-1/3 flex justify-center items-start p-4">
          <div className="image-preview w-40 h-40 border-4 border-gray-300 rounded-full flex justify-center items-center overflow-hidden">
            {/* Display the selected image or a placeholder if none selected */}
            {profileImage ? (
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span className="text-gray-500">No Image</span>
            )}
          </div>
        </div>

        {/* Right Section: Signup Form */}
        <div className="form-section w-2/3 ml-8">
          <div className="title">
            <h1 className='text-black text-center text-[50px]'> Student Form</h1>
          </div>
          <form onSubmit={handleSubmit(finalSubmission, handleValidationErrors)}>

           
            <div className="mb-4">
              <label htmlFor="fname" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <span><MdOutlineDriveFileRenameOutline /></span>
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
              <label htmlFor="lname" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <span><MdOutlineDriveFileRenameOutline /></span>
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
            {/* Date of Birth */}
          <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
            <MdOutlineDriveFileRenameOutline />
            Date of Birth
          </label>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Controller
              name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                onChange={(date) => field.onChange(date)} // Pass dayjs object directly
                slotProps={{
                  textField: {
                    className: "border p-2 w-full", // Add your custom styles
                  },
                }}
              />
      )}
    />
  </LocalizationProvider>
  {errors.dateOfBirth && (
    <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth.message}</p>
  )}
</div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2 flex gap-2 items-center">
               <span><MdEmail /></span>
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

            {/* Mobile No. */}
            <div className="mb-4">
              <label htmlFor="mobile" className="block text-gray-700 font-medium mb-2 flex gap-2 items-center">
                <span><AiFillPhone /></span>
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

            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
                <span><CgGenderFemale /></span>
                Select Gender
              </label>
              <div className="option-one">
                <input name='male' defaultChecked="true" value="male" {...register("gender")} type="radio" id='male' />
              </div>
               <div className="option-one">
                <input className='text-black' name='female'  value="female" {...register("gender")}  type="radio" id='female' />
              </div>
               <div className="option-one">
                <input name='other' {...register("gender")} value="other"  type="radio" id='other' />
              </div>
             
              {errors.gender && (
                <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
              )}
            </div>

            {/* Hobbies */}
            <div className="mb-4">
              <label htmlFor="hobbies" className="block text-gray-700 font-medium mb-2 flex gap-2 items-center">
               <span><BsBackpack4Fill /></span>
                Hobbies
              </label>
              <ColorMultiSelect
                onChange={(selectedOptions) => setValue("hobbies", selectedOptions.map(option => option.value))}
              />
              {errors.hobbies && (
                <p className="text-red-500 text-sm mt-1">{errors.hobbies.message}</p>
              )}
            </div>

            {/* Profile Picture Upload */}
            <div className="mb-4">
              <label htmlFor="profile" className="block text-gray-700 font-medium mb-2 flex items-center gap-2">
               <span><CgProfile /></span>
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

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700 font-medium mb-2 flex gap-2 items-center">
                <span><AiFillEnvironment /></span>
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

            {/* Submit Button */}
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
    </div>
  );
};

export default Signup;
