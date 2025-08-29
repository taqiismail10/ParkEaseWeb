//validations/validator.js

import vine from "@vinejs/vine";

export const waitlistValidator = vine.object({
  name: vine.string().trim().minLength(3).maxLength(190),

  email: vine.string().trim().email(),

  phone: vine
    .string()
    .trim()
    .regex(/^\+8801[3-9]\d{8}$/) // BD number: +8801[3-9]XXXXXXXX
    .optional(),
});

export const investorValidator = vine.object({
  fullName: vine.string().trim().minLength(3).maxLength(190),

  email: vine.string().trim().email(),

  phone: vine
    .string()
    .trim()
    .regex(/^\+8801[3-9]\d{8}$/) // BD number: +8801[3-9]XXXXXXXX
    .optional(),

  description: vine.string().maxLength(500).optional().nullable(),
});
