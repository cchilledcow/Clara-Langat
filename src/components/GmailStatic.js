import React from "react";
import Gmail from "./Gmail";

const GmailStatic = () => {
  const exampleEmails = [
    {
      sender: { name: "John Doe", email: "johndoe@example.com" },
      subject: "Important Information",
      date: "2024-02-03 12:30 PM",
      content: "This is the content of the email. It can be quite detailed.",
      attachments: [{ name:"AccountStatus.pdf", type:"pdf" }]
    },
    {
      sender: { name: "Alice Smith", email: "alicesmith@example.com" },
      subject: "Your Account Status",
      date: "2024-02-03 10:15 AM",
      content: "Please review the attached PDF for information regarding your account.",
      attachments: [] // Add an empty array if no attachments
    },
    // Add more examples as needed
  ];

  return (
    <Gmail emails={exampleEmails} />
  );
};
export default GmailStatic;