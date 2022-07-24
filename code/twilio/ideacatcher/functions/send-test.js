exports.handler = (context, event, callback) => {
    const client = context.getTwilioClient();
    console.log("Sending Text");
    client.messages.create({
        to: context.PHONE_NUMBER,
        from: context.TWILIO_NUMBER,
        body : `New Idea 💡 : ${event.TranscriptionText}`

    }).then((message) => {
        console.log(`Send Message: ${message.sid}`);
        callback(null, `Send Message: ${message.sid}`);
    }).catch((error) => {
        console.log(`Oho!! ${error}`);
        callback(error);
    })
    console.log(client.messages);
}