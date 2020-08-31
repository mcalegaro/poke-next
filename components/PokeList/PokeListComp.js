import PokeCard from "../PokeCard/PokeCard";

export default function PokeListComp({list}) {
    return <div id="list" className={["grid"].join(" ")}>
        {
            list.map(({ name, url }) => (
                <PokeCard key={name} name={name} url={url} />
            ))
        }
    </div>
}