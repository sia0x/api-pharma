import mongoose from 'mongoose';

class User {
  constructor() {
    this.setModel();
  }

  setModel() {
    this.detailSchema = new mongoose.Schema({
      gender: String,
      name: Object,
      location: Object,
      email: String,
      login: Object,
      dob: Object,
      registered: Object,
      phone: String,
      cell: String,
      id: Object,
      picture: Object,
      nat: String,
      info: Object,
      imported_t: { type: Date, default: Date.now },
      status: { type: String, default: 'published' },
    });
  }

  getModel() {
    return this.detailSchema;
  }
}

export default mongoose.model('User', new User().getModel());
