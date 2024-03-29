import React from "react";

const SendEmail = (props) => {
  const [email] = React.useState(localStorage.getItem("email"));
  const [to] = React.useState(props.trainee.email);
  const [subject] = React.useState("Study Buddy");
  const [message] = React.useState("Hello, I would like to study with you.");

  const sendEmail = async (e) => {
    e.preventDefault();
    const data = {
      email,
      to,
      subject,
      message,
    };
    if (email === "" || to === "" || subject === "" || message === "") {
      alert("Please fill all fields");
    } else {
      const response = await fetch(
        "https://starter-kit-0qci.onrender.com/api/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const content = await response.json();
      alert("Email sent successfully");
      window.location.reload();
    }
  };

  return (
    <div>
      <button className="btn btn-outline-dark" onClick={sendEmail}>
        Notify by Email
      </button>
    </div>
  );
};

export default SendEmail;
