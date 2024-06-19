import Card from "./Card"
import Section from "./Section"
import { drinks } from "@/constants"

const Drinks = () => {
 return (
  <Section title="Drinks" id="drinks">
   {drinks.map((item) => (
    <Card
     key={item.id}
     image={item.image}
     title={item.title}
     description={item.description}
     price={item.price}
     href={item.href}
    />
   ))}
  </Section>
 )
}

export default Drinks