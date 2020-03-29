import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const getUserData = (token) => {
  const payload = jwt.decode(token, process.env.REACT_APP_JWT_KEY);
  return payload;
}
export default getUserData;
