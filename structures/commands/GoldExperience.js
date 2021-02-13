import BaseCommand from '../../../../structures/commands/BaseCommand.js'
import fetch from 'node-fetch'

export default class GoldExperience extends BaseCommand {
    constructor(...args) {
        super(...args);
    }

    get randomThumbnail() {
        const items = ["https://i.imgur.com/innXfnd.jpg", "https://i.imgur.com/LvHqmVT.gif", "https://i.imgur.com/innXfnd.jpg"];
        return items[Math.floor(Math.random() * items.length)];
    }

    /**
     * @param {string} url
     */
    async customFetch(url) {
        const req = await fetch(url);
        return req.json();
    }

    /**
     * @param {string} name The name of the api to fetch from shibe
     * @param {number} [amount=1] The amount of images to return
     * @returns {Promise<JSON>}
     */
    async get(name, amount = 1) {
        const req = await fetch(`http://shibe.online/api/${name}?count=${amount}`);
        return req.json();
    }
}
