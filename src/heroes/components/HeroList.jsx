import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher"
import { HeroCard } from "./HeroCard"

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

  return (
    <div className="row rows-col-1 row-cols-md-3 g-3">
        {
            //Traer a los heroes
            heroes.map(hero => (
                <HeroCard key={hero.id}
                //traer props de hero
                { ...hero}
                />
            ))
        }
    </div>

    )
}
