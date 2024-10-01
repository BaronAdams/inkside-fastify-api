import { FromSchema } from 'json-schema-to-ts';
import type { JSONSchema } from "json-schema-to-ts";

const userSchema : JSONSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email"
    },
    username: {
      type: "string"
    },
    password: {
      type: "string",
      minLength: 6,
      pattern: "(?=(.*[A-Z]){2})(?=.*[!@#$%^&*(),.?\":{}|<>]).*"
    }
  },
  required: ["email", "username", "password"]
};

type User = FromSchema<typeof userSchema>;

// Exemple d'utilisation
const user: User = {
  email: "examexample.com",
  username: "user123",
  password: "Abc@1234" // Doit respecter les critères
};

