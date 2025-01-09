import React, { useState, useRef, useEffect} from 'react'
import { enqueueSnackbar, closeSnackbar } from 'notistack'
import { IoCloseOutline } from "react-icons/io5";
import { BiImageAlt } from "react-icons/bi";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { Input, Modal } from 'antd';
import { useFormik } from "formik";
import * as Yup from "yup"
import ReactFlagsSelect from "react-flags-select";
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { apiPatch } from '../../libs/api';
import { checkAuthStatus, setProfile } from '../../libs/store/features/authSlice'

export const EditProfile = () => {
  const {fullname, email, phoneNumber, country, id, profilePicture } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
    const [image, setImage] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [croppedImage, setCroppedImage] = useState(profilePicture);
    const cropperRef = useRef(null);

    const formikProfile = useFormik({
      initialValues: {
        name: fullname,
        email: email,
        phoneNumber: phoneNumber,
        country: country ? country : "IN",
        id : id,
        profilePicture: profilePicture,
      },
      validationSchema: Yup.object({
        name: Yup.string()
          .min(3, "Name must be at least 3 characters")
          .required("Name is required"),
        email: Yup.string()
          .email("Invalid email address")
          .required("Email is required"),
        phoneNumber: Yup.string()
          .required("Number is required"),
        profilePicture: Yup.mixed(),
        id: Yup.string()
      }),
      onSubmit: async(values) => {
        const formData = new FormData();
        values.name == fullname ? '' : formData.append('name', values.name);
        values.email == email ? '' : formData.append('email', values.email);
        values.profilePicture ? formData.append('profilePicture', values.profilePicture) : '';
        formData.append('id', values.id);
        values.phoneNumber == phoneNumber ? '' : formData.append('phoneNumber', values.phoneNumber);
        values.country == country ? '' : formData.append('country', values.country);
        try {
          const response = await apiPatch('/auth/update-profile', formData, true)
          console.log("API Response:", response);
          if (response) {
            dispatch(checkAuthStatus());
            dispatch(setProfile());
            enqueueSnackbar('Profile update Successful!', {
              variant: 'success',
              action: (key) => (
                <IoCloseOutline
                  onClick={() => closeSnackbar(key)} 
                  color="white"
                  size={"24px"}
                >
                </IoCloseOutline>
              ),
            });
            navigate('/profile')
          } else {
            console.log(response.data.message);
          }
         } catch (error) {
          console.log("Error",error)
          enqueueSnackbar('Profile Update Failed!', {
            variant: 'error',
            action: (key) => (
              <IoCloseOutline
                onClick={() => closeSnackbar(key)} 
                color="white"
                size={"24px"}
              >
              </IoCloseOutline>
            ),
          });
         }
        console.log(values)
      },
    });

  
    const handleImageChange = (e, setFieldValue) => {
      const file = e.target.files[0];
      if (file) {
        setImage(URL.createObjectURL(file));
        setIsModalOpen(true);
      }
    };
  
    const handleCrop = (setFieldValue) => {
      if (cropperRef.current) {
        const cropper = cropperRef.current.cropper;
        cropper.getCroppedCanvas().toBlob((blob) => {
          const croppedFile = new File([blob], "cropped-image.jpg", {
            type: "image/jpeg",
          });
          setCroppedImage(URL.createObjectURL(blob)); // Preview image
          setFieldValue("profilePicture", croppedFile); // Save file in Formik
          setIsModalOpen(false);
        });
      }
    };

      useEffect(() => {
        if (fullname) {
          formikProfile.setValues({
            name: fullname,
            email: email,
            phoneNumber: phoneNumber,
            country: country || 'IN',
            id: id,
            profilePicture: profilePicture,
          });
        }
      }, [fullname, email, phoneNumber, country, id, profilePicture]);
  return (
    <div className=''>
        <div className="container mx-auto min-h-[calc(100svh-200px)] py-24 flex items-center justify-center">
            <form onSubmit={formikProfile.handleSubmit} className='max-w-lg w-full p-5 rounded-2xl border flex items-center flex-col gap-5 relative'>
                <div className='w-[120px] p-1 rounded-full border relative group'>
                 
                        <div>
                        <img src={croppedImage ? croppedImage : `https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`} className="w-full h-auto object-cover rounded-full aspect-square brightness-100 group-hover:brightness-50 transition-all" alt="" />
                        </div>
                    <div className='absolute top-[calc(50%-10px)] left-[calc(50%-10px)]'>
                      <BiImageAlt color='#ffffff' size={"20px"} />
                    </div>
                    <input type="file" accept="image/*" className='w-full h-full rounded-full absolute top-0 left-0 opacity-0' onChange={handleImageChange} />
                    {formikProfile.touched.profilePicture && formikProfile.errors.profilePicture && (
      <span className="text-red-600 left-0 absolute text-xs bottom-0 right-0 w-full">
        {formikProfile.errors.profilePicture}
      </span>
    )}
                </div>
                <div className='w-full'>
                     <div className="relative">
                        <label htmlFor="name" className="block font-medium mb-1 text-sm">
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          name="name"
                          className="mb-3 outline-none"
                          value={formikProfile.values.name}
                          placeholder="Enter Name"
                          onChange={formikProfile.handleChange}
                          onBlur={formikProfile.handleBlur}
                        />
                        {formikProfile.touched.name && formikProfile.errors.name && (
                          <span className="text-red-600 absolute text-xs right-0 top-2">
                            {formikProfile.errors.name}
                          </span>
                        )}
                      </div>
                   <div className="relative">
                       <label htmlFor="email" className="block font-medium mb-1 text-sm">
                         Email
                       </label>
                       <Input
                         id="email"
                         type="email"
                         name="email"
                         className="mb-3 outline-none"
                         value={formikProfile.values.email}
                         placeholder="Enter Email"
                         onChange={formikProfile.handleChange}
                         onBlur={formikProfile.handleBlur}
                       />
                       {formikProfile.touched.email && formikProfile.errors.email && (
                         <span className="text-red-600 absolute text-xs right-0 top-2">
                           {formikProfile.errors.email}
                         </span>
                       )}
                     </div>
                     <div className="relative">
    <label htmlFor="name" className="block font-medium mb-1 text-sm">
      Phone Number
    </label>
    <div className='flex'>
    <ReactFlagsSelect
    selected={formikProfile.values.country}
    onSelect={(code) => {
      formikProfile.setFieldValue('country', code);
    }}
    searchable
    searchPlaceholder="Search..."
    className='countryCode mb-3 !pb-0'
    showOptionLabel={false}
    fullWidth={false}
    showSelectedLabel={false}
    alignOptionsToRight
  />
    <Input
      id="phoneNumber"
      type="number"
      name="phoneNumber"
      className="mb-3 outline-none rounded-tl-none rounded-bl-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
      value={formikProfile.values.phoneNumber}
      placeholder="Enter Phone Number"
      onChange={formikProfile.handleChange}
      onBlur={formikProfile.handleBlur}
    />
    </div>
    {formikProfile.touched.phoneNumber && formikProfile.errors.phoneNumber && (
      <span className="text-red-600 absolute text-xs right-0 top-2">
        {formikProfile.errors.phoneNumber}
      </span>
    )}
  </div>
                </div>
                <button
    type="submit"
    className="w-full p-2 border border-primary rounded text-primary font-semibold hover:bg-primary hover:text-white transition-all"
  >
    Save
  </button>
                </form>
        </div>
      <Modal title="Basic Modal" open={isModalOpen}  onOk={() => handleCrop(formikProfile.setFieldValue)} onCancel={() => setIsModalOpen(false)}>
      {image && (
        <div style={{ marginTop: "20px" }}>
      <Cropper
        ref={cropperRef}
        src={image}
        style={{ height: 400, width: "100%" }}
        initialAspectRatio={1}
        aspectRatio={1}
      />
        </div>
      )}
      </Modal>
    </div>
  )
}
