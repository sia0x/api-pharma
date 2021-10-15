import mongoose from 'mongoose';
import User from '../../models/User';

const findById = async (data) => {
  const { id } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) return { message: 'Necessário informar um id válido' };

  const user = await User.findById(id);

  if (!user) return {};

  return user;
};

export default findById;
