const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false, //true para 465 e false para outras
    auth: {
        user: 'seuemail@hotmail.com', //email pessoal. 
        pass: 'suasenha', //senha pessoal.
    }

});

transport.sendMail({
    from: 'Manuel do Dev <seuemail@hotmail.com>',
    to: 'paraquemquerenviar@gmail.com',
    subject: 'Assunto: Enviando email com Nodemailer',
    html: '<p>Texto: escreva seu texto aqui<p/>',
    text: ' ',
})

.then(() => console.log('email enviado com sucesso'))

.catch((err) => console.log('email não enviado', err));




