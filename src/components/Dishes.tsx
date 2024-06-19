import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { dishes } from "@/constants"

const Dishes = () => {
 return (
  <Section title="Dishes" id="dishes">
   {dishes.map((item) => (
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

export default Dishes