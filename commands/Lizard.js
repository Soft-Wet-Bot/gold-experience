import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Lizard extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Lizard, {
            category: category,

            name: 'gold experience lizard',
            aliases: [],
            description: 'Sends a lizard picture',
            usage: 'gold experience lizard',
            params: [],
            example: 'gold experience lizard'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const { url } = await this.customFetch('https://nekos.life/api/v2/img/lizard');

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
