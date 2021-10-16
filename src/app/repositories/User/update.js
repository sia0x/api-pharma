import mongoose from 'mongoose';
import User from '../../models/User';

const update = async (data) => {
  const { id, ...rest } = data;

  const isValid = mongoose.Types.ObjectId.isValid(id);

  if (!isValid) return { message: 'Necessário informar um id válido!' };

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

  const user = await User.findOneAndUpdate(id, dataToUpdate, {
    returnDocument: 'after',
  });

  if (!user) return { message: 'Usuário não foi encontrado!' };

  await User.syncIndexes();

  return user;
};

export default update;
