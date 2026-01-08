import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  code: {
    type: Number,
  },
  codename: {
    type: String,
  },
  division_type: {
    type: String,
  },
  phone_code: {
    type: Number,
  },
  districts: {
    type: [
      {
        name: {
          type: String,
        },
        code: {
          type: Number,
        },
        codename: {
          type: String,
        },
        division_type: String,
        wards: [
          {
            name: String,
            code: Number,
            codename: String,
            division_type: String,
          },
        ],
      },
    ],
  },
});

const Province = mongoose.model('Province', schema, 'provinces');
export default Province;