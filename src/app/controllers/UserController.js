class UserController {
  async index(req, res) {
    return res
      .status(200)
      .json({ message: 'REST Back-end Challenge 20201209 Running' });
  }
}

export default new UserController();
