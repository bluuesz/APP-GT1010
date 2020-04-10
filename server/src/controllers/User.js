import * as Yup from 'yup';

import { User } from '../models';

export default async (req, res) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
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

  const { name, email, password } = req.body;

  const existsUser = await User.findOne({ where: { email } });

  if (existsUser)
    return res.status(401).json({ error: 'This email already exists' });

  await User.create({ name, email, password });

  return res.json({ name, email });
};
