import List from '../repositories/User/list';
import findById from '../repositories/User/findById';
import Update from '../repositories/User/update';
import Delete from '../repositories/User/delete';
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

  async findById(req, res) {
    try {
      const user = await findById(req.params);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json('Internal server error');
    }
  }

  async update(req, res) {
    try {
      const user = await Update({ ...req.params, ...req.body });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json('Internal server error');
    }
  }

  async delete(req, res) {
    try {
      const user = await Delete(req.params);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json('Internal server error');
    }
  }
}

export default new UserController();
