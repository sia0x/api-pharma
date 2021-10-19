import Session from '../repositories/Session/session';

class SessionController {
  async session(req, res) {
    try {
      const user = await Session(req.body);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json('Internal server error');
    }
  }
}

export default new SessionController();
