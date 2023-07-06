import SecondFloor from "./SecondFloor";

import { metaData } from "@/utils/metadata";
export function generateStaticParams() {
  const paths = [ 'bg', 'en']

  return paths.map((path) => {
    return {
      locale: path
    }
  })
}

export const metadata = metaData('Втори етаж')

export default function Page () {
  return (
    <SecondFloor></SecondFloor>
  )
}
