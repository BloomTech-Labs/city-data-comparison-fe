import React from 'react'; 

 const smoc = props => {
    return(
        <div>
            <h1 className="smocTitle">Selected Monthly Owner Costs</h1>
            <p className="smocText">Selected monthly owner costs are calculated from the sum of payment for mortgages, real estate taxes, various insurances, utilities, fuels, mobile home costs, and condominium fees. Listing the items separately improves accuracy and provides additional detail. When combined with income, a new item is created -- Selected Monthly Owner Costs as a Percentage of Household Income. This item is used to measure housing affordability and excessive shelter costs. For example, many government agencies define excessive as costs that exceed 30 percent of household income.</p>
            <div className= "smoc-link">
            <a href = "https://factfinder.census.gov/help/en/selected_monthly_owner_costs.htm">Source</a>
            </div>
        </div>
    )



 }

 export default smoc