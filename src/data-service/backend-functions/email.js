import emailjs from "emailjs-com";

export async function sendContactEmail(name, email, companyName, message) {
  const formData = {
    from_name: name,
    from_email: email,
    from_company: companyName,
    message: message,
  };

  // await emailjs
  //   .sendForm(
  //     "service_m2rpbnh",
  //     "template_pmtz02k",
  //     formData,
  //     "nIbdE5UD8hK93TNSq"
  //   )
  //   .then((response) => {
  //     // Success!
  //   })
  //   .catch((error) => {
  //     // Error!
  //   });
}
