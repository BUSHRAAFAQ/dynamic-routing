
import Link from "next/link";

export default function Home(){
  return(
    <div>
      <h1>Country List</h1>
      <Link href="/country/pakistan" style={{margin:"10px", borderRadius:"10px",border:"5px solid purple"
        ,padding:"10px" }}>Pakistan</Link>
      <Link href="/country/india"style={{margin:"10px",borderRadius:"10px",border:"5px solid black"
        ,padding:"10px" }}>Qatar</Link>
         <Link href="/country/india"style={{margin:"10px",borderRadius:"10px",border:"5px solid blue"
        ,padding:"10px" }}>Kuwait</Link>
         <Link href="/country/india"style={{margin:"10px",borderRadius:"10px",border:"5px solid yellow"
        ,padding:"10px" }}>Bahrain</Link>
         <Link href="/country/india"style={{margin:"10px",borderRadius:"10px",border:"5px solid pink"
        ,padding:"10px" }}>Dobai</Link>
    </div>

  )
}