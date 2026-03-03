'use client'
export const ApartmentOne = ({apartmentName}) => {
    console.log(apartmentName.name);
    return(
        <div>{apartmentName.name}</div>
    )
}