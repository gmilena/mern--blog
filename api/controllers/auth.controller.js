import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password || username === '' || email === '' || password === '' ) {
    return next(errorHandler(400, 'Se requieren todos los campos'));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: 'Registro existoso.' });
  } catch (error) {
    if (error.code === 11000) {
        return next(errorHandler(400, 'El nombre de usuario o correo electrónico ya está en uso.'));
      }
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password} = req.body;

  if (!email || !password) {
    return next(errorHandler(400, 'Todos los campos son requeridos.'));
  }

  try {
    const validUser = await User.findOne({email});
    if (!validUser) {
      return next(errorHandler(404, 'Usuario no encontrado'));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword){
      return next(errorHandler(400, 'Contraseña inválida'));
    }

    const token = jwt.sign({ id: validUser._id}, process.env.JWT_SECRET);

    const {password: pass, ...rest} = validUser._doc;

    res.status(200).cookie('access_token', token, {httpOnly: true}).json({ rest });

  } catch (error) {
    next(error);
  }
}