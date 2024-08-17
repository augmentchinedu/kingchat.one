const { Service } = require("./class");

const { services } = new Service();

async function init(User) {
  for (let [i, serviceInfo] of services.entries()) {
    let service = await User.findById(serviceInfo._id);
    if (!service) {
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
      services[i] = {
        profile: {
          _id: service._id,
          displayName: service.displayName,
          username: service.username,
          photoURL: serviceInfo.photoURL,
          description: serviceInfo.description,
        },
      };
    }

    if (service) {
      const profile = service.profile;
      delete profile.lastSeen;
      services[i] = { profile };
    }
  }
}

module.exports = { Service, init, services };
