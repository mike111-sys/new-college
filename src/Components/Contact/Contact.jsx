import React from "react";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ffc77064-7c0b-4b3f-b9ed-6b03ca10667b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact"  className="mx-auto my-20 max-w-[90%] flex flex-col md:flex-row md:justify-between md:items-center">
      <div className="mb-14 md:w-[48%] text-gray-600 space-y-5">
        <h3 className="text-[25px] font-medium text-[#000f38] flex items-center mb-5">
          Send us a message
          <img src={msg_icon} alt="" className="ml-2 w-9" />
        </h3>
        <p className="max-w-[450px] leading-relaxed">
          Feel free to reach out through the contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          college community.
        </p>
        <ul className="space-y-5">
          <li className="flex items-center">
            <img src={mail_icon} alt="" className="w-6 mr-2" />
            upperhillcollege@gmail.com
          </li>
          <li className="flex items-center">
            <img src={phone_icon} alt="" className="w-6 mr-2" />
            +254742957520
          </li>
          <li className="flex items-start">
            <img src={location_icon} alt="" className="w-6 mr-2" />
            Nakuru, Kenyatta Street <br /> Opposite Nyayo Garden Next To Sidian
            Bank Pelar House 2nd Floor <br />
            P.O Box 214-20100 Nakuru
          </li>
        </ul>
      </div>

      <div className="md:w-[48%] text-gray-600 space-y-5">
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="block w-full bg-[#ebecfe] p-4 mb-4 mt-1"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            className="block w-full bg-[#ebecfe] p-4 mb-4 mt-1"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message"
            required
            className="block w-full bg-[#ebecfe] p-4 mb-4 mt-1 resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-800 text-white px-5 py-2 rounded-full inline-flex items-center justify-center"
          >
            Submit now <img src={white_arrow} alt="" className="ml-2 w-4" />
          </button>
        </form>
        <span className="block my-5">{result}</span>
      </div>
    </div>
  );
};

export default Contact;
