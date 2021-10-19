import mongoose from 'mongoose';
import User from '../../models/User';
import ExceptionStatus from '../../utils/exceptionStatus';
import ExceptionValidation from '../../utils/exceptionValidation';

const update = async (data) => {
  const { id, ...rest } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid)
    throw new ExceptionValidation({
      message: 'Necessário informar um id válido!',
      fieldWithError: id,
    });

  const dataToUpdate = {};

  (function recurse(obj, current) {
    for (const key in obj) {
      const value = obj[key];
      const newKey = current ? current + '.' + key : key;
      if (value && typeof value === 'object') {
        recurse(value, newKey);
      } else {
        dataToUpdate[newKey] = value;
        rest[newKey] = value;
      }
    }
  })(rest);

  const user = await User.findByIdAndUpdate(id, dataToUpdate, {
    returnDocument: 'after',
  });

  if (!user)
    throw new ExceptionStatus({
      message: 'Usuário não foi encontrado !',
      status: 404,
    });

  return user;
};

export default update;
