import mongoose from 'mongoose';
import User from '../../models/User';

const list = async (data) => {
  const { id } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) return { message: 'Necessário informar um id válido' };

  if (!user) return {};

  return user;
};

export default list;
