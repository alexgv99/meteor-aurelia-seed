import "bootstrap";
import "aurelia-polyfills";
import aureliaBootstrapper from "aurelia-bootstrapper-meteor";
import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.error);

aureliaBootstrapper
	.bootstrap(aurelia => {
		aurelia
			.use
			.globalResources(
				// imports globais utilizados em "views" ao invés de usar a tag <require>
				// filtros conversores ex.: "client/_resources/converters/date"
			)
			.standardConfiguration()
			// .developmentLogging()
			;
		aurelia
			.start()
			.then(() => aurelia.setRoot("client/app", document.body));
	});

export class App {
	configureRouter(config, router) {
		config.title = "Meteor Aurelia Seed";
		config.map([{
			route: ["", "exemplo1"],
			name: "exemplo1",
			moduleId: "./paginaExemplo1/exemplo1",
			nav: true,
			title: "Exemplo 1"
		}, {
			route: "exemplo2",
			name: "exemplo2",
			moduleId: "./paginaExemplo2/exemplo2",
			nav: true,
			title: "Exemplo 2"
		}, {
			route: "contato",
			name: "contato",
			moduleId: "./contato/contato",
			nav: true,
			title: "Contatos"
		}]);
		this.router = router;
	}
}
