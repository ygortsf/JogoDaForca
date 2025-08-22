// import Image from "next/image";
// import styles from "./page.module.css";

import { Galera } from "@/gella/Galera";
import { Avatar } from "@/gella/Avatar";

export default function Home() {
  return (
    <div>
      <h2>Texto descritivo</h2>
      <Galera/>
      <Avatar/>
       <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
      size={100}
    />
    </div>
  )
}
