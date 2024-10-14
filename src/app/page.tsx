'use client'
import { useUserQuery } from "@/features/user/useUserQuery";


export default function App() {
    const { data } = useUserQuery()

    console.log(data)



    return (
        <>
        </>
    );
}
