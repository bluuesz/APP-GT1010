import 'dotenv/config';

import * as Yup from 'yup';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res) => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(6)
      .required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({ error: 'Validations fails' });
  }

  const { email, password } = req.body;

  const emailLower = email.toLowerCase();

  const user = await User.findOne({ where: { email: emailLower } });

  if (!user) {
    return res.status(400).json({ error: 'This user does not exists' });
  }

  if (!(await user.validPassword(password))) {
    return res.status(401).json({ error: 'Password does not match' });
  }

  const { id, name } = user;

  return res.json({
    user: {
      id,
      name,
      email,
    },
    token: jwt.sign({ id }, process.env.APP_SECRET, {
      expiresIn: '1d',
    }),
  });
};
