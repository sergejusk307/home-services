const baseSchema = (schema, excludeFields = []) => {
  schema.set('toJSON', {
    transform: (document, returnedObject) => {
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
