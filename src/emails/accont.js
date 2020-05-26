const sgMail=require('@sendgrid/mail')

const apikey="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"

sgMail.setApiKey(apikey);


const welcomeEmail=(email,name)=>{

sgMail
  .send({
to:email,
from:"chessman1hajime@gmail.com",
subject:"email",
text:`welcome${name} `

})
  .then(() => {
    // Celebrate
  })
  .catch(error => {
     console.error(error);

    if (error.response) {
      // Extract error msg
      const {message, code, response} = error;

      // Extract response msg
      const {headers, body} = response;

      console.error(body);
    }
  });

}


const cancelEmail=(email)=>{

sgMail
  .send({
to:email,
from:"chessman1hajime@gmail.com",
subject:"email",
text:'how can improve'

})
  .then(() => {
    // Celebrate
  })
  .catch(error => {
     console.error(error);

    if (error.response) {
      // Extract error msg
      const {message, code, response} = error;

      // Extract response msg
      const {headers, body} = response;

      console.error(body);
    }
  });

}






module.exports={
welcomeEmail,
 cancelEmail


}


