import List from '../repositories/User/list';
class UserController {
  async index(req, res) {
    return res
      .status(200)
      .json({ message: 'REST Back-end Challenge 20201209 Running' });
  }

  async indexUser(req, res) {
    try {
      const users = await List();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json('Internal server error');
    }
  }
}

export default new UserController();
