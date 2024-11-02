const baseSchema = (schema) => {
    schema.set('toJSON', {
        transform: (document, returnedObject) => {
            returnedObject.id = document._id.toString();
            delete returnedObject._id;
            delete returnedObject.__v;
        }
    });
};

export default baseSchema;