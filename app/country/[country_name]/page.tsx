import { Countries } from "@/types/componentTypes";


export default function CountryName({params}:any)
{
  const countries: { //arry of multiples objects of countries
    name:string,
    population :number,
    capital:string,
  }[]=[
    {
        name:"Pakistan",
        population :21876005,
        capital:"Islamabad",
    },
    {
        name:"Qatar",
        population :2785940,
        capital:"Doha",
    },
    {
        name:"Kuwait",
        population :218675,
        capital:"Kuwaitcity",
    },
    {
        name:"Bahrain",
        population :187590,
        capital:"Manama",
    },
    {
        name:"Dobai",
        population :45678,
        capital:"Abu Dahbi",
    },
  ];
  function findCountry(country_url:string){
   return countries.find(country=>country.name.toLowerCase()==country_url.toLocaleLowerCase())
  
}
let result=findCountry(params.country_name);
 return(
        <div>
            {
               result ?(
                    <>
                      <h1 >Country Name:{result.name}</h1>
            <h1>Country Capital:{result.capital}</h1>
            <h1>Country Population:{result.population}</h1>
                    </>
                ):(
                    <h1>Country Not Found</h1>
                )
            }
        
        </div>

    )
}