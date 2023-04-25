
import { heroes } from '../data/heroes'

export const getHeroesByPublisher = ( publisher ) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];
    //Validar si se incluye un publicador valido si no, arroja el new Error
    if (!validPublisher.includes(publisher)) {
        throw new Error(`${ publisher } is not a valid publisher`)
    }
    return heroes.filter(heroe => heroe.publisher === publisher);
}



