import mongoose from 'mongoose';
import User from '../../models/User';

const remove = async (data) => {
  const { id } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) return { message: 'Necessário informar um id válido' };

  const user = await User.findByIdAndDelete(id);

  if (!user) return {};

  return { message: 'Usuário deletado com sucesso!' };
};

export default remove;
