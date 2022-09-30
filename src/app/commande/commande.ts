import {Client} from '../client/client'

export interface Commande {
	id: number;
	clientId: number;
	dateCmd: Date;
}
