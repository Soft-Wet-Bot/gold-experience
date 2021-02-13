import BaseModule from "./structures/BaseModule.js";

export default class GoldExperience extends BaseModule {
  /**
   * @param {Main} main
   */
  constructor(main) {
    super(main);

    this.register(GoldExperience, {
      name: "goldexperience",
    });
  }

  init() {
    this.modules.commandRegistrar.registerCommands('goldexperience', import.meta.url);

    return true;
  }
}
