import axios from "axios";

export default {
  user: {
    signup: (user) =>
      axios
        .post("https://lms-server-octopus.herokuapp.com/api/v1/auth/signup", {
          fullName: user.fullName,
          email: user.email,
          password: user.password,
        })
        .then((res) => res.data.user),
  },
};
