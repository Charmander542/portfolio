import emailjs from "@emailjs/browser";

const mail = ({ name, email, message }) => {
  return emailjs.send(
    "service_5avm3vi",
    "template_64ipuas",
    { name, email, message },
    "DIYG-tnEaBcHqjFDa"
  );
};

export default mail;
