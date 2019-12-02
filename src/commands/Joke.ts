import {Command, flags} from '@oclif/command'

export default class Joke extends Command {
  static description = 'return a joke'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  async run() {
    const {args, flags} = this.parse(Joke)
	var request = require('request');

	let options = {
    url: 'https://geek-jokes.sameerkumar.website/api',
    method: 'GET'
	}

	request(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        this.log(body)
	});
  }
}
