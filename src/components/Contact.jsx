import {useState, useRef} from "react";
import emailjs from "@emailjs/browser";
import ContactIcon from "./icons/ContactIcon";
import {toast} from "react-toastify";
import Spinner from "./icons/Spinner";
import EmailContactIcon from "./icons/EmailContact";
import InputComponent from "./InputComponent";
import UserIcon from "./icons/User";
import SubjectIcon from "./icons/Subject";
import MessageIcon from "./icons/Message";
import Send from "./icons/Send";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const API_KEY = import.meta.env.VITE_EMAILJS_API_KEY;

const Contact = () => {
  const [correo, setCorreo] = useState({
    name: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, API_KEY)
        .then((result) => {
          toast.success(`${result.text}. Tu mensaje ha sido enviado!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setCorreo({
            name: "",
            email: "",
            asunto: "",
            mensaje: "",
          });
        });
    } catch (error) {
      toast.error(error.text, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInput = (event) => {
    setCorreo({
      ...correo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h2 className="text-3xl font-semibold mb-6 flex items-center gap-x-3">
        <ContactIcon class="size-8" />
        Contacto
      </h2>
      <p className="text-lg mb-4 text-pretty">
        Completá tus datos y contactate conmigo
      </p>
      <fieldset>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="flex flex-col mx-8 gap-4 border bg-gray-400/20 border-gray-400/20 shadow-white shadow-sm p-5 rounded-lg"
        >
          <InputComponent
            name="name"
            id="inputName"
            value={correo.name}
            onChange={handleInput}
            type="text"
            placeholder="Nombre"
            required={true}
          >
            <UserIcon className="size-8" />
          </InputComponent>

          <InputComponent
            name="email"
            id="inputEmail"
            value={correo.email}
            onChange={handleInput}
            type="email"
            placeholder="email@example.com"
            required={true}
          >
            <EmailContactIcon className="size-8" />
          </InputComponent>

          <InputComponent
            name="asunto"
            id="inputAsunto"
            value={correo.asunto}
            onChange={handleInput}
            type="text"
            placeholder="Asunto"
            required
          >
            <SubjectIcon className="size-8" />
          </InputComponent>

          <div className="flex bg-inherit rounded px-3">
            <MessageIcon className="size-8" />
            <textarea
              name="mensaje"
              id="textMensaje"
              value={correo.mensaje}
              onChange={handleInput}
              className="bg-transparent outline-none border-none py-2 px-2 w-full"
              rows="5"
              placeholder="Mensaje"
              required
            />
          </div>

          <button
            disabled={isLoading}
            className="rounded py-2 px-4 w-full border border-white bg-white text-black hover:scale-105 transition hover:bg-slate-200"
            type="submit"
            id="buttonSubmit"
          >
            {isLoading ? (
              <Spinner />
            ) : (
              <div className="flex items-center justify-center gap-x-2">
                <span>Enviar</span>
                <Send className="size-7" />
              </div>
            )}
          </button>
        </form>
      </fieldset>
    </>
  );
};

export default Contact;
