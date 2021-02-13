import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Cat extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Cat, {
            category: category,

            name: 'gold experience cat',
            aliases: [],
            description: 'Sends a cat picture',
            usage: 'gold experience cat',
            params: [],
            example: 'gold experience cat'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const [image] = await this.get('cats');

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
