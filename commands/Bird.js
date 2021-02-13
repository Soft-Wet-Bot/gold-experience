import GoldExperience from '../structures/commands/GoldExperience.js'

export default class Bird extends GoldExperience {
    /**
     * @param {string} category
     * @param {Array<*>} args
     */
    constructor(category, ...args) {
        super(...args);

        this.register(Bird, {
            category: category,

            name: 'gold experience bird',
            aliases: [],
            description: 'Sends a bird picture',
            usage: 'gold experience bird',
            params: [],
            examples: 'gold experience bird'
        });
    }

    /**
     * @param {string} command string representing what triggered the command
     */
    async run(command) {
        try {
            const [image] = await this.get('birds');

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
