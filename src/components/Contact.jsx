import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import ContactIcon from "./icons/ContactIcon"
import { toast } from 'react-toastify'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY

const Contact = () => {
  const [correo, setCorreo] = useState({
    name:"",
    email: "",
    asunto: "",
    mensaje: ""
  })

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
      .then((result) => {
          toast.success(`${result.text}. Tu mensaje ha sido enviado!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
            setCorreo({
              name:"",
              email: "",
              asunto: "",
              mensaje:""
            })
            

      }, (error) => {
          toast.error(error.text, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
            });
      });
  }

  const handleInput = (event) => {
    setCorreo({
      ...correo,
      [event.target.name]: event.target.value
    })
    }

  return (
    <>
    <h2 className="text-3xl font-semibold mb-6 flex items-center gap-x-3">
      <ContactIcon class="size-8"/>
        Contacto
    </h2>
    <p className="text-lg mb-4 text-pretty">Completá tus datos y contactate conmigo</p>
    <form ref={form} onSubmit={handleSubmit} 
    className="flex flex-col gap-4 max-w-80 mx-auto border bg-gray-400/20 border-gray-400/20 shadow-white shadow-sm p-5 rounded-lg">
      <input
        name="name"
        id="inputName"
        className="rounded py-2 px-4 w-full"
        value={correo.name}
        onChange={handleInput}
        type="text"
        placeholder="Nombre"
        required
      />
      <input
        name="email"
        id="inputEmail"
        value={correo.email}
        onChange={handleInput}
        className="rounded py-2 px-4 w-full"
        type="email"
        placeholder="Email"
        required
      />
      <input
        name="asunto"
        id="inputAsunto"
        value={correo.asunto}
        onChange={handleInput}
        className="rounded py-2 px-4 w-full"
        type="text"
        placeholder="Asunto"
        required
      />
      <textarea
        name="mensaje"
        id="textMensaje"
        value={correo.mensaje}
        onChange={handleInput}
        className="rounded py-2 px-4 w-full"
        rows="5"
        placeholder="Mensaje"
        required
      ></textarea>
      <button
        className="rounded py-2 px-4 w-full border border-white bg-white text-black hover:scale-105 transition hover:bg-slate-200"
        type="submit"
        id="buttonSubmit"
      >
        Enviar consulta
      </button>
    </form>
    </>
  );
};

export default Contact;
