const emailData = 
[
  {
    id: 1,
    subject: "Urgent Password Reset - Acme Corp",
    content: [
      { text: "Sender: security@acmecorp.com\nReceiver: jane.doe@example.com\n\n"},

      { text: "Dear Jane,\n\nWe have recieved a request to reset the password for your Acme Corp email account. If you did not make this request, please click the link below immediately to secure your account:\n\n" },

      { text: "acmecorp.com/reset-password", link: "acmecorp.com/reset-password" },

      { text: "\n\nThank you for your prompt attention to this matter.\n\nBest regards,\nAcme Corp IT Support" },
    ],
    attachments: [],
    isPhishing: "yes",
    links: [
      "acmecorp.com/reset-password"
    ]
  },
  {
    id: 2,
    subject: "Congratulations on your Promotion!",
    content: [
      { text: "Sender: manager@bigcorp.com\nReceiver: john.smith@example.com\n\n"},

      { text: "Dear John,\n\nI am delighted to inform you that you have been promoted to the position of Senior Analyst, effective immediately. Your hard work and dedication to the team have not gone unnoticed, and we are excited to have you take on this new role.\n\nPlease let me know if you have any questions or concerns. I look forward to discussing your new responsibilities and goals in our upcoming meeting.\n\nCongratulations again!\n\nBest regards,\nMatilda Johnson\nManager, BigCorp"}
    ],
    attachments: [],
    isPhishing: "no",
    links: []
  },
  {
    id: 3,
    subject: "Your Delivery is Waiting - Click to Confirm",
    content: [
      { text: "Sender: support@deliveryexpress.com\nReceiver: jane.doe@example.com\n\n"},

      { text: "Dear Jane,\n\nWe have been unable to deliver your recent package due to an issue with the address. Pls click the link below to verify your delivery information and ensure your package is delivered promptly:\n\n"},

      { text: "deliveryexpress.com/verify", link: "deliveryexpress.com/verify" },

      {text: "\n\nThank you for your attention to this matter.\n\nRegards,\nDelivery Express Support" },
    ],
    attachments: [],
    isPhishing: "yes",
    links: [
      "lindeliveryexpress.com/verify"
    ]
  },
  {
    id: 4,
    subject: "Reminder: Parent-Teacher Conference",
    content: [
      { text: "Sender: principal@exampleschool.edu\nReceiver: john.smith@example.com\n\n"},

      { text: "Dear Mr. Smith,\n\nThis is a friendly reminder about the upcoming parent-teacher conference for your child, Emily Smith, on Friday, April 18th at 6 pm. We look forward to discussing her progress and answering any questions you may have.\n\nPlease let us know if you need to reschedule.\n\nSincerely,\nPrincipal Samantha Lee\nExample School"}
    ],
    attachments: [],
    isPhishing: "no",
    links: []
  },
  {
    id: 5,
    subject: "New Photos from the Picnic!",
    content: [
      { text: "Sender: matilda.brown@example.com\nReceiver: john.smith@example.com\n\n"},

      { text: "Hi John,\n\nI hope you and your family had a wonderful time at the picnic last weekend. I've attached some photos from the event that I thought you might enjoy.\n\nLet me know if you have any trouble accessing the photos.\n\n"},

      { text: "https://drive.exampleschool.edu/picnic-photos.zip", link: "https://drive.exampleschool.edu/picnic-photos.zip" },

      { text: "\n\nBest regards,\nMatilda" },
    ],
    attachments: [
      {
        "name": "Picnic Photos.zip",
        "url": "https://drive.exampleschool.edu/picnic-photos.zip"
      }
    ],
    isPhishing: "no",
    links: [
      "https://drive.exampleschool.edu/picnic-photos.zip"
    ]
  },
  {
    id: 6,
    subject: "Verify Your Account - Example Bank",
    content: [
      { text: "Sender: support@example-bank.com\nReceiver: jane.doe@example.com\n\n"},
      
      {text: "Dear Jane,\n\nOur records indicate that your bank account information needs to be updated. To prevent any disruption to your services, please click the link below to verify your account details:\n\n"},

      { text: "example-bank.com/verify", link: "example-bank.com/verify" },

      { text: "\n\nThank you for your prompt attention to this matter.\n\nSincerely,\nExample Bank Support" },
    ],
    attachments: [],
    isPhishing: "yes",
    links: [
      "example-bank.com/verify"
    ]
  },
  {
    id: 7,
    subject: "Dinner Plans This Weekend?",
    content: [
      { text: "Sender: jessica.williams@example.com\nReceiver: john.smith@example.com\n\n"},

      {text: "Hi John,\n\nI was wondering if you're still free for dinner this Saturday at 7 pm? I'd love to catch up and hear about your new job.\n\nLet me know if the time still works for you.\n\nBest,\nJessica"}
    ],
    attachments: [],
    isPhishing: "no",
    links: []
  }
]

export default emailData;
