import { ApartmentOne } from "@/app/components/ApartmentOne";
async function getData() {
  const res = await fetch('http://localhost:3000/api/aparmentOne');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}

export default async function Page() {
  const name = await getData();
  return (
    <ApartmentOne apartmentName={ name }></ApartmentOne>
  )
}