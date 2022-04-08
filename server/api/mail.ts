import type { IncomingMessage, ServerResponse } from 'http';
import { useBody } from 'h3';
import { FormData } from 'formdata-node';
import Mailgun from 'mailgun.js';

const DOMAIN = process.env.MAILGUN_DOMAIN;
const API_KEY = process.env.MAILGUN_API_KEY;
const URL = process.env.MAILGUN_URL;
const ADMIN_EMAIL = 'stijn@stijnjanmaat.nl';

const sendToAdmin = ({ mailgunClient, body }) => {
  const data = {
    from: `stijnjanmaat.nl <${ADMIN_EMAIL}>`,
    to: ADMIN_EMAIL,
    subject: `Message from ${body.name} <${body.email}>`,
    'h:Reply-To': body.email,
    text: `Hi Stijn, 
    
Look at this message:

${body.message}

From: ${body.name} <${body.email}>
Sending domain: ${process.env.BASE_URL}`,
  };
  
  return mailgunClient.messages.create(DOMAIN, data);
};

const sendCopy = ({ mailgunClient, body }) => {
  const data = {
    from: `Stijn Janmaat <${ADMIN_EMAIL}>`,
    to: body.email,
    subject: 'Your message on stijnjanmaat.nl',
    text: `Hi ${body.name},

You sent me this message:

${body.message}

Thanks, I'll take a look and I'll get back to you!

Cheers,
Stijn`,
  };

  return mailgunClient.messages.create(DOMAIN, data);
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const mailgun = new Mailgun(FormData);
    const mailgunClient = mailgun.client({ 
      username: 'api', 
      key: API_KEY,
      url: URL,
    });

    const body = await useBody(req);

    await Promise.all([
      sendToAdmin({mailgunClient, body}),
      sendCopy({mailgunClient, body}),
    ]);
    
    console.log('[api-mail] Success, 2 mails sent');

    return {
      status: 'submitted',
      email: body.email,
    };
  } catch (error) {
    console.log('[api-mail] Error', error);
    req.statusCode = error.status;

    return { 
      error,
    };
  }
};
