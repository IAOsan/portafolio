import Joi from 'joi';

const nameModel = Joi.string().empty('').default('xxxxxx').trim().label('Name');

const emailModel = Joi.string()
	.email({
		minDomainSegments: 2,
		tlds: { allow: ['com', 'net'] },
	})
	.required()
	.trim()
	.label('Email');

const messageModel = Joi.string().min(8).required().trim().label('Message');

export const contactSchema = Joi.object({
	name: nameModel,
	email: emailModel,
	message: messageModel,
});
