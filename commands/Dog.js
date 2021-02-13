import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Dog extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Dog, {
            category: category,

            name: 'gold experience dog',
            aliases: [],
            description: 'Sends a dog picture',
            usage: 'gold experience dog',
            params: [],
            example: 'gold experience dog'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const { url } = await this.customFetch('https://nekos.life/api/v2/img/woof');

            const embed = new this.Discord.MessageEmbed()
                .setColor("#ffff00")
                .setTitle("GOLD EXPERIENCE")
                .setThumbnail(this.randomThumbnail)
                .setImage(url);
            this.send(embed);
        } catch (e) {
            this.send('Unknown error occured, notify the creator of the bot if this persists:```js\n' + e.stack + '```');
        }

        return true;
    }
}
