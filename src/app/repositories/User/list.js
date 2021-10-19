import User from '../../models/User';

const list = async (params) => {
  const { page = 1, limit = 10 } = params;

  let users = await User.find()
    .skip(+page * +limit)
    .limit(+limit)
    .sort({ imported_t: -1 });

  return users;
};

export default list;
