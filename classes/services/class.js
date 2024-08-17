const { services } = require("./data");

class Service {
  constructor() {
    this.services = [];

    services.forEach((service) => {
      let profile = {};
      profile._id = service.name.trim().toLowerCase().replaceAll(" ", "-");

      profile.username = service.name.trim().replaceAll(" ", "");
      profile.displayName = service.name;
      profile.photoURL = `https://storage.googleapis.com/kingchatone.appspot.com/services/${service.name
        .trim()
        .toLowerCase()
        .replaceAll(" ", "_")}/logo.png`;
      profile.description = service.description;
      profile.email = profile.username.toLowerCase() + "@kingchat.one";
      this.services.push({ ...profile });
    });
  }
}

module.exports = { Service };
