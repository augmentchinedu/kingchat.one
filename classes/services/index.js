const { Service } = require("./class");
const { auth } = require("../../firebase");

const { services } = new Service();

async function init(User) {
  for (let [i, serviceInfo] of services.entries()) {
    let service = await User.findById(serviceInfo._id);

    if (!service) {
      try {
        let user = await auth.createUser({
          uid: serviceInfo._id,
          email: serviceInfo.email,
          emailVerified: true,
          displayName: serviceInfo.displayName,
          password: "12345678",
          photoURL: serviceInfo.photoURL,
        });

        console.log(user);

        const service = new User({
          _id: serviceInfo._id,
          displayName: serviceInfo.displayName,
          email: serviceInfo.email,
          username: serviceInfo.username,
          chats: [],
          photoURL: serviceInfo.photoURL,
          description: serviceInfo.description,
        });
        await service.save();
        addToServices(service, i);
      } catch (err) {
        console.log(err);
      }
    }

    if (service) {
      const profile = service.profile;
      delete profile.lastSeen;
      services[i] = { profile };
    }
  }

  function addToServices(service, i) {
    services[i] = {
      profile: {
        _id: service._id,
        displayName: service.displayName,
        username: service.username,
        photoURL: service.photoURL,
        description: service.description,
      },
    };
  }
}

module.exports = { Service, init, services };
