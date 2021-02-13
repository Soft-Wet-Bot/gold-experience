import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Fox extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Fox, {
            category: category,

            name: 'gold experience fox',
            aliases: [],
            description: 'Sends a fox picture',
            usage: 'gold experience fox',
            params: [],
            example: 'gold experience fox'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const { image } = await this.customFetch('https://randomfox.ca/floof/');

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
