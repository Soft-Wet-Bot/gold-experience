import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Doge extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Doge, {
            category: category,

            name: 'gold experience doge',
            aliases: [
                'shibes'
            ],
            description: 'Sends a doge picture',
            usage: 'gold experience doge',
            params: [],
            example: 'gold experience doge'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const [image] = await this.get('shibes');

            const embed = new this.Discord.MessageEmbed()
                .setColor("#ffff00")
                .setTitle("GOLD EXPERIENCE")
                .setThumbnail(this.randomThumbnail)
                .setImage(image);
            this.send(embed);
        } catch (e) {
            this.send('Unknown error occured, notify the creator of the bot if this persists:```js\n' + e.stack + '```');
        }

        return true;
    }
}
