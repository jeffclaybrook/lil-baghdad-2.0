import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { curry } from "@/constants"

const Curry = () => {
 return (
  <Section title="Curry" id="curry">
   {curry.map((item) => (
    <Card
     key={item.id}
     image={item.image}
     title={item.title}
     description={item.description}
     price={item.price}
     href={item.href}
    />
   ))}
   <Separator />
  </Section>
 )
}

export default Curry