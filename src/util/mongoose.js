module.exports = {
  multipleMongooseToObject: function (mongooseArrays) {
    // Check if mongooseArrays is an array
    if (!Array.isArray(mongooseArrays)) {
      return mongooseArrays ? mongooseArrays.toObject() : mongooseArrays;
    }
    // If it's an array, map over it and convert each element to an object
    return mongooseArrays.map((mongoose) => mongoose.toObject());
  },
  mongooseToObject: function (mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
