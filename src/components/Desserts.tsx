import Card from "./Card"
import Section from "./Section"
import Separator from "./Separator"
import { desserts } from "@/constants"

const Desserts = () => {
 return (
  <Section title="Desserts" id="desserts">
   {desserts.map((item) => (
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

export default Desserts