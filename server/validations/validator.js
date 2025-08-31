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
  name: vine.string().trim().minLength(3).maxLength(190), // Changed from fullName to name
  email: vine.string().trim().email(),
  description: vine.string().maxLength(500).optional().nullable(),
});

export const supportValidator = vine.object({
  name: vine.string().minLength(2).maxLength(100),
  email: vine.string().email(),
  subject: vine.string().minLength(3).maxLength(200),
  message: vine.string().minLength(10).maxLength(1000),
});
