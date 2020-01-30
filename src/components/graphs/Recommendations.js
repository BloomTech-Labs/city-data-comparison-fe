import React, {useState, useEffect, useContext} from "react";
import Axios from "axios"
import {CityContext} from "../../contexts/CityContext"

const Recommendations = ({city}) => {
    const {getCity} = useContext(CityContext)
    let [cultureRec, setCultureRec] = useState("");
    let [housingRec, setHousingRec] = useState("");
    let [industryRec, setIndustryRec] = useState({city: "", id: ""});
    let housingURL = "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/housing/"
    let cultureURL = "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/culture/"
    let industryURL = "https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/recommend/industry/"
    //get recommendations when component mounts
    useEffect( _ => {
            Axios.get(`${housingURL}${city._id}`)
            .then(res=> {
                let recName = Object.keys(res.data)[0];
                setHousingRec({city: recName, ID: res.data[recName].id})
            })
            Axios.get(`${cultureURL}${city._id}`)
            .then(res=> {
                let recName = Object.keys(res.data)[0];
                setCultureRec({city: recName, ID: res.data[recName].id})
            })
            Axios.get(`${industryURL}${city._id}`)
            .then(res=> {
                let recName = Object.keys(res.data)[0];
                setIndustryRec({city: recName, ID: res.data[recName].id})
            })
            
        
        
    },[])

    return (
        <div className="recommendation-grid">
            <span onClick={_ => getCity(housingRec)}>Similar Housing: {housingRec.city}</span>
            <span onClick={_ => getCity(cultureRec)}>Similar Culture: {cultureRec.city}</span>
            <span onClick={_ => getCity(industryRec)}>Similar Industries: {industryRec.city}</span>
        </div>
    )

}
export default Recommendations;