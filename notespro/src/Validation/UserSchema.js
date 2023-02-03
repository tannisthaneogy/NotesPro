import * as yup from "yup"

export const validate=yup.object.shape({
    name: yup.string()
      .max(50, "Must be 15 characters or less")
      .required("Required"),
      phone: yup.string()
      .max(14, "Phone number is not valid")
      .required("Required"),
    gender: yup.string().required("Required"),
    qualification: yup.string().required("Required"),
})