const mockEmails = [
    {
        Id:1,
        Subject:"ATTENTION! Your PayPal account will close soon!",
        Content:[
            {
                text: "Dear Member,",
              },
              {
                text: "We have faced some problems with your account. Please update the account. If you do not update, it will be closed.",
              },
              {
                text: "To update your account, just confirm your information. (It only takes a minute)",
              },
              {
                text: "It's easy.",
              },
              {
                text: "1. Click the link below to open a secure browser window.",
                newLine: true, // Indicate a new line after this sentence
              },
              {
                text: "2. Confirm that you're the owner of the account, and then follow the instructions.",
              },
              {
                text: "Relog in to your account now",
                link: "http://efax.hosting.com.mailru382.co",
              },
            ],
        IsPhishing:false,
        Attachemets: [],
        Links: ["http://efax.hosting.com.mailru382.co"], 
        Sender: {
            name: "John Doe",
            email: "john.doe@gmail.com",
            avatar: "J" 
          },
    },


    {
        Id:2,
        Subject:"You received a 1-page fax",
        Content:[
            {
              text: "You received a 1-page fax at 18/01/2024, 22:15. ",
            },
            {
              text: "Click here to view this fax online",
              link: "http://efax.hosting.com.mailru382.co",
            },
          ],
        IsPhishing:false,
        Attachemets: [],
        Links: ["http://efax.hosting.com.mailru382.co"], 
        Sender: {
            name: "John Doe",
            email: "john.doe@gmail.com",
            avatar: "J" 
          },
    },

    {
        Id:3,
        Subject:"I just found a photo of you!",
        Content:[
            {
              text: "Hey, do you remember ",
            },
            {
              text: "this photo",
              link: "https://drive.google.com",
            },
          ],
        IsPhishing:true,
        Attachemets: [],
        Links: ["https://drive.google.com"],
        Sender: {
            name: "Phil Mark",
            email: "Mark.phil@gmail.com",
            avatar: "M" 
          },
    },

    {
        Id:4,
        Subject:"2024 Financial Activity Report",
        Content:"Good day Hendry, Please find attached the 2024 financial activity report for your persual. Thanks and regards, Ms. Sharon Mosley Westmount Day School",
        IsPhishing:false,
        Attachemets: [ {id: 1, name: 'Phishing.pdf', url: 'http://phishingsite.com/phishing.pdf'}],
        Links: [],
        Sender: {
            name: "Lewis Hendry",
            email: "Hendry.lewis@gmail.com",
            avatar: "H" 
          },
    },

]
export default mockEmails;