const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);
module.exports = {
    async afterCreate(event){
        const { result } = event
        const msg = {
            to: 'servicios@altiosafi.com',
            from: process.env.DEFAULT_FROM_EMAIL, // Use the email address or domain you verified above
            replyTo: process.env.DEFAULT_REPLY_EMAIL,
            cc: ['info@labforapps.com', 'marioytorres@hotmail.com'],
            subject: 'Notificación altiosafi',
            template_id: process.env.SENGRID_TEMPLATE_ID,
            dynamic_template_data: {
                "fullname": `${result.firstname} ${result.lastname}`,
                "procedence": "Formulario de contacto"
            }
        };
        try {
            await mail.send(msg);
            strapi.log.debug('Email sent!')
        } catch (error) {
            strapi.log.error(error)
            if (error.response) {
                strapi.log.debug(error.response.body)
            }
        }
    }
}


