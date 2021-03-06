import { Button, TextField } from '@mui/material';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function Contact() {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(2, "Name should be of minimum 2 characters length").max(20, "Name should be of maximum 20 characters length").trim(),
    surname: Yup.string().required("Surname is required").min(2, "Surname should be of minimum 2 characters length").max(30, "Surname should be of maximum 20 characters length").trim(),
    mail: Yup.string().required("Email is required").email("Enter a valid email"),
    message: Yup.string().required("Message is required").min(10, "Message should be of minimum 10 characters length").max(100, "Message should be of maximum 100 characters length"),
  })

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      mail: "",
      message: ""
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className='contact'>
        <h1 className="contact-h1" id="Contact">Contact Us</h1>
        <div className='row'>
          <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-3'></div>
          <div className='col-10 col-sm-8 col-md-6 col-lg-6 col-xl-6'>
            <div className='contact-form'>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id="name"
                  name="name"
                  label="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                  fullWidth
                  id="surname"
                  name="surname"
                  label="surname"
                  value={formik.values.surname}
                  onChange={formik.handleChange}
                  error={formik.touched.surname && Boolean(formik.errors.surname)}
                  helperText={formik.touched.surname && formik.errors.surname}
                />
                <TextField
                  fullWidth
                  id="mail"
                  name="mail"
                  label="mail"
                  value={formik.values.mail}
                  onChange={formik.handleChange}
                  error={formik.touched.mail && Boolean(formik.errors.mail)}
                  helperText={formik.touched.mail && formik.errors.mail}
                />
                <TextField
                  fullWidth
                  id="message"
                  name="message"
                  label="message"
                  type="message"
                  multiline
                  rows={4}
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />
                <Button color="primary" variant="contained" fullWidth type="submit" className='send-button'>
                  Send
                </Button>
              </form>
            </div>
          </div>
          <div className='col-1 col-sm-2 col-md-3 col-lg-3 col-xl-3'></div>
        </div>
      </div>
    </>
  )
}
