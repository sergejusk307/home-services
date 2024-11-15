import { Schema } from 'mongoose';

const baseSchema = (schema: Schema, excludeFields: string[] = []): void => {
  schema.set('toJSON', {
    transform: (document: any, returnedObject: any) => {
      returnedObject.id = document._id.toString();
      delete returnedObject._id;
      delete returnedObject.__v;

      excludeFields.forEach((field) => {
        delete returnedObject[field];
      });
    },
  });
};

export default baseSchema;
