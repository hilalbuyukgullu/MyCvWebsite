import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Formik, useFormik } from 'formik';

export default function Contact() {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState<string>("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const registerSchema = Yup.object().shape({
    name: Yup.string().required("Name is required").min(2, "en az 2 karakter").max(30, "En fazla 30 karakter").trim(),
    surname: Yup.string().required("Surname is required").min(2, "en az 2 karakter").max(30, "En fazla 30 karakter").trim(),
    mail: Yup.string().required("Email is required").email("Enter a valid email"),
    message: Yup.string().required("Message is required").min(18, "en az 18").max(100, "en fazla 150"),
  })

  function fncSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const returnMessage = {
      name: "",
      surname: "",
      mail: "",
      message: ""
    }
    console.log('returnMessage :>> ', returnMessage);
  }

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





      <h1 className="contact-h1" id="Contact">Contact Us</h1>
      <div className='contact col-12'>
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
    </>
  )
}
