import * as Yup from 'yup';
import User from '../models/User';

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

  await User.create({ name, email, password });

  return res.json({ name, email });
};
