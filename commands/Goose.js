import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Goose extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Goose, {
            category: category,

            name: 'gold experience goose',
            aliases: [],
            description: 'Sends a goose picture',
            usage: 'gold experience goose',
            params: [],
            example: 'gold experience goose'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const { url } = await this.customFetch('https://nekos.life/api/v2/img/goose');

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
