import React from 'react';
import Banner from '../Banner/Banner';
import FilterTag from '../FilterTag/FilterTag';
import ExpList from '../Experience/ExpList'

function ExperiencePage(props) {
    return (
        <>
          <Banner></Banner>
          <FilterTag></FilterTag>
          <ExpList></ExpList>  
        </>
    );
}

export default ExperiencePage;