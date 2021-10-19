import mongoose from 'mongoose';
import User from '../../models/User';
import ExceptionStatus from '../../utils/exceptionStatus';
import ExceptionValidation from '../../utils/exceptionValidation';

const remove = async (data) => {
  const { id } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    throw new ExceptionValidation({
      message: 'Necessário informar um id válido!',
      fieldWithError: id,
    });

  const user = await User.findByIdAndDelete(id);

  if (!user)
    throw new ExceptionStatus({
      message: 'Usuário não foi encontrado!',
      status: 404,
    });

  return { message: 'Usuário deletado com sucesso!' };
};

export default remove;
