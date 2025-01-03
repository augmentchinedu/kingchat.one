const { Service } = require("./class");
const { User } = require("../../db");
const { auth } = require("../../firebase");

const { services } = new Service();

async function init() {
  for (let [i, serviceInfo] of services.entries()) {
    let service = await User.findById(serviceInfo._id);

    if (!service) {
      try {
        await auth.createUser({
          uid: serviceInfo._id,
          email: serviceInfo.email,
          emailVerified: true,
          displayName: serviceInfo.displayName,
          password: "12345678",
          photoURL: serviceInfo.photoURL,
        });

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
        console.error(err);
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
